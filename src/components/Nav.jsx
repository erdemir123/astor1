import React from "react";
import userLogo from "../assets/logo/blank.png";
import hamburger from "../assets/logo/hamburger.svg";
import turna from "../assets/logo/astor.png";
import { BsSun } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, setThemeMenu } from "../store/services/mainSlice";
import { themeTabs } from "../tabs/themeTabs";

const Nav = () => {
  const dispatch = useDispatch();
  const { themeMenu } = useSelector((state) => state.main);
  const { theme } = useSelector((state) => state.main);
  

  return (
    <div className="flex justify-between lg:justify-end items-center h-16 border-b-2 relative">
      <div className="lg:hidden flex px-4 ">
        <img src={hamburger} alt="" className="w-6 mr-4" />
        <img src={turna} alt="" className="w-24 rounded-lg" />
      </div>
      <div className="flex justify-center items-center gap-4 px-4">
        <BsSun
          className="text-2xl font-bold text-red-500 cursor-pointer"
          onClick={() => dispatch(setThemeMenu(!themeMenu))}
        />
        <img src={userLogo} alt="" className="w-10 rounded-lg" />
        {themeMenu && (
          <div onClick={()=>console.log("object")} className=" z-50 absolute  top-12  right-16 custom-animation cursor-pointer bg-white w-40 shadow-lg h-40 rounded-2xl flex justify-center items-center flex-col gap-4 text-[#B7B8BB]" >
            {themeTabs.map((item, index) => (
                <div  className="flex w-[90%] gap-2 justify-start items-center rounded-lg py-1 " key={index} onClick={()=>console.log("object")}>
                  <item.icon  size={16}/>
                  <div onClick={()=>console.log("object")}>{item.poKey}</div>
                </div>
            
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
