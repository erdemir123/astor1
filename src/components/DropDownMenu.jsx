import React from "react";

const DropDownMenu = ({ id, isOpen,item}) => {
  console.log(item)
  return (
    <>
      {isOpen && (
        <div
          id={id}
          className="z-80 absolute  -top-14  left-20 custom-animation cursor-pointer bg-[#E6E7E8] w-28 shadow-lg h-24 rounded-2xl flex justify-center items-center flex-col gap-2 text-[#000000]"
        >
          <div>{item.firstName + " " + item.lastName}</div>
          <div>{item.alim}</div>
        </div>
      )}
    </>
  );
};

export default DropDownMenu;
