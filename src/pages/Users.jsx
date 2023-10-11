import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import AppHeader from "../components/AppHeader";
import data from "../tabs/data";
import Modal from "../components/Modal";

const Users = () => {
  const [selectedOption, setSelectedOption] = useState("Gimat Kavşağı");
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState();
  const handleSelectChange = (event) => {
    // Seçilen seçeneğin değerini alın ve state'i güncelleyin
    setSelectedOption(event.target.value);
  };
  const galleryData = [
    ...data.filter((item, index) => item.city === selectedOption),
  ];
  console.log(galleryData[0].img.map((item, index) => item.url));
  return (
    <PageWrapper>
      <AppHeader
        header="Station Gallery"
        subHeader="Home - Station Gallery"
        buttonName="Add Photo"
      />
      <div className="bg-white rounded-lg shadow-lg px-6 pt-4 pb-40 relative ">
        <select
          onChange={handleSelectChange}
          className="bg-gray-200 w-60 px-3 py-2 border-2 border-gray-300 rounded-md mt-4"
        >
          {data.map((item, idx) => (
            <option value={item.city} key={idx}>
              {item.city}
            </option>
          ))}
        </select>

        <div className="flex justify-start items-center flex-wrap gap-4 mt-11">
          {galleryData[0].img.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setOpenModal(!openModal);
                setModalItem(item);
              }}
            >
              <img src={item.image} className="w-80 h-60 rounded-md shadow-lg"></img>
            </div>
          ))}
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          item={modalItem}
        />
      )}
    </PageWrapper>
  );
};

export default Users;
