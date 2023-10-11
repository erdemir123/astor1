import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Tables from "./Tables";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const PaginationCard = ({ headerName, inputName, data }) => {
  const [filteredName, setFilteredName] = useState("");
  const rowPerPage = 10
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowPerPage;
  const indexofFirstRow = indexOfLastRow - rowPerPage;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginateData =
    data &&
    [...data]
      ?.sort((a, b) => a.id - b.id)
      .slice(indexofFirstRow, indexOfLastRow);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.length / rowPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);

  return (
    <div className="bg-white rounded-lg shadow-lg px-6 pt-4 pb-40 relative ">
      <div className="mt-4 mb-2 flex justify-between  items-center">
        {headerName && <p className="text-md font-bold">{headerName}</p>}
        <div className="flex relative">
          <input
            type="text"
            className="border-none outline-none bg-gray-100 p-2 indent-8 rounded-lg w-80"
            placeholder={`Search ${inputName}`}
            value={filteredName}
            onChange={(e) => setFilteredName(e.target.value)}
          />
          <span className="absolute top-2 left-2">
            <BiSearchAlt size={24} color="gray" />
          </span>
        </div>
      </div>
      <div className="w-full flex">
      <Tables
        name={inputName}
        data={paginateData}
        filteredName={filteredName}
      />
      </div>
    </div>
  );
};

export default PaginationCard;
