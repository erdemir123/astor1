import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Layout from "../components/Layout";
import AdminIndex from "../pages/AdminIndex";
import DeviceList from "../pages/DeviceList";
import Personel from "../pages/Personel";
import Users from "../pages/Users";
import SmartLocations from "../pages/SmartLocations";
import Assets from "../pages/Assets";
import CarManage from "../pages/CarManage";
import Room from "../pages/Room";
import Templates from "../pages/Templates";
import Module from "../pages/Module";
const AppRouter = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.main);

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />}>
            <Route index element={<AdminIndex />} />
            <Route path="device_list" element={<DeviceList />} />
            <Route path="smart_locations" element={<SmartLocations />} />
            <Route path="users" element={<Users />} />
            <Route path="personel" element={<Personel />} />
            <Route path="device_list" element={<DeviceList />} />
            <Route path="assets" element={<Assets />} />
            <Route path="car_manage" element={<CarManage />} />
            <Route path="room" element={<Room />} />
            <Route path="templates" element={<Templates />} />
          </Route>
        </Route>
        <Route path="/module" element={<Module />} />
      </Routes>
    </>
  );
};

export default AppRouter;
