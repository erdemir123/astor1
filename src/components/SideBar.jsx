import React from "react";
import { leftMenuTabs } from "../tabs/leftMenuTabs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPageName,
  setPageName,
  selectMenuSize,
  setMenuSize,
} from "../store/services/mainSlice";
import { useNavigate } from "react-router";
import { CgMenuLeftAlt } from "react-icons/cg";
import turna from "../assets/logo/astor.png";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageName = useSelector(selectPageName);
  const menuSize = useSelector(selectMenuSize);
  console.log(menuSize);
  return (
    <div
      className={`${
        menuSize === "large" ? " w-64 " : "w-20"
      } transition-all duration-400 sticky top-0 left-0 h-[calc(100vh-0px)] z-40 shadow-lg lg:block hidden bg-white `}
    >
      <div
        className="bg-white h-16 hidden  lg:flex justify-center items-center relative border-b-2"
        onClick={() =>
          dispatch(setMenuSize(menuSize === "large" ? "small" : "large"))
        }
      >
        <img
          src={turna}
          alt=""
          className={`${menuSize === "large" ? "w-40 h-14" : "w-14 rounded-lg"}`}
        />
        <CgMenuLeftAlt className="text-3xl absolute -right-4 bg-white shadow-lg rounded-md " />
      </div>
      <div className="flex flex-col ">
        {leftMenuTabs.map((item, index) => {
          return (
            <div key={index} className="px-3 mt-2 ">
              {menuSize === "large" && item.poKey !== "" && (
                <p className="mt-4 text-[#B7B8BB] ml-[10px] text-sm">{item.poKey}</p>
              )}
              {item.subTitle.map((item, index) => {
                return (
                  <div
                    className={`${
                      pageName === item.name ? "bg-[#F4F6FA] text-red-500" : ""
                    }  flex justify-start items-center mt-1 gap-3 p-2 rounded-lg text-[#B7B8BB] hover:text-red-500`}
                    key={index}
                    onClick={() => {
                      dispatch(setPageName(item.name));
                      navigate(item.route);
                    }}
                  >
                    <item.icon className="" size={26} />
                    {menuSize === "large" && (
                      <p className="text-center mt-1 text-sm">{item.name}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
