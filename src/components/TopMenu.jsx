import React from "react";


const TopMenu = ({ tabs, activeId, setActiveId }) => {
  return (
    <div className="shadow bg-white h-16 rounded-lg flex justify-center items-center gap-4 mb-2">
      {tabs.map((tab, index) => (
        <div className={`${activeId === index+1 ? "bg-red-400 text-white" : "bg-gray-200  text-black"} px-4 py-2 rounded-md font-medium cursor-pointer `}  key={index} onClick={()=>setActiveId(index+1)}>
          <p>{tab.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TopMenu;
