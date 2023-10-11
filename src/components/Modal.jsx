import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ item, setOpenModal, openModal }) => {
  console.log(item);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000fc] z-[50] opacity-70"
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="fixed w-[55%] h-[70%] top-[50%] left-[50%] z-[8000] text-black -translate-x-1/2 -translate-y-1/2 ">
        <img src={item.image} className="w-full h-full rounded-md shadow-md"></img>
        <div className="absolute top-0 right-0">
          <AiOutlineCloseCircle size={32} color="white"  onClick={() => setOpenModal(false)}/>
        </div>
      </div>
    </>
  );
};

export default Modal;
