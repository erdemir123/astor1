import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import PageWrapper from "../components/PageWrapper";
import Paginate from  "../components/Paginate"


import data from "../tabs/data";

const DeviceList = () => {
  const rowPerPage = 4;
  const [selectedOption, setSelectedOption] = useState('Gimat Kavşağı');
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowPerPage;
  const indexofFirstRow = indexOfLastRow - rowPerPage;
  const handleSelectChange = (event) => {
    // Seçilen seçeneğin değerini alın ve state'i güncelleyin
    setSelectedOption(event.target.value);
  };
  const filteredData= data.filter((item)=>item.city === selectedOption)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData[0].satıs.length / rowPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginateData =filteredData[0].satıs.sort((a, b) => a.id - b.id).slice(indexofFirstRow, indexOfLastRow)
  console.log(filteredData)
  console.log(paginateData)
 
  return (
    <PageWrapper>
      <AppHeader header="Customer Listing" subHeader="Home-Customer List" />
       <div className="bg-white rounded-lg shadow-lg px-6 pt-4 pb-40 relative ">
       <select onChange={handleSelectChange} className="bg-gray-200 w-60 px-3 py-2 border-2 border-gray-300 rounded-md mt-4">
        {data.map((item,idx)=><option value={item.city} key={idx}>{item.city}</option>)}
      </select>
      <table className="table-auto w-full text-left text-[12px] font-light text-gray-500 overflow-x-scroll mt-4">
        <thead className="border-b border-neutral-200 ">
            <tr>
              <th scope="col" className="px-4 py-4 ">
                ID
              </th>
              <th scope="col" className="px-4 py-4">
                FIRSTNAME
              </th>
              <th scope="col" className="px-4 py-4">
                LASTNAME
              </th>
              <th scope="col" className="px-4 py-4">
                PLAKA
              </th>
              <th scope="col" className="px-4 py-4">
                ARAÇ TİPİ
              </th>
              <th scope="col" className="px-4 py-4">
                STATUS
              </th>
              
            </tr>
          
          
        </thead>
        <tbody>
        {paginateData.map((item, index) => (
              <tr
                className="border-b border-neutral-200 font-medium"
                key={index}
              >
                <td className="whitespace-nowrap px-4 py-4">{item.id}</td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.firstName || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.lastName || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.plaka || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.arac_tipi || "-"}
                </td>
                
                
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`${
                      item.status === null
                        ? "bg-white"
                        : item.status === "pasif"
                        ? "bg-red-300 text-red-700 pr-6"
                        : "bg-emerald-300 text-emerald-600 pr-4"
                    } whitespace-nowrap p-2 rounded-md font-bold`}
                  >
                    {item.status}
                  </span>
                </td>
                
              </tr>))}
          
         
          
        </tbody>
       
      </table>
      <Paginate
          paginate={paginate}
          currentPage={currentPage}
          data={data}
          rowPerPage={rowPerPage}
          pageNumbers={pageNumbers}
        />
        
      </div> 
    </PageWrapper>
  );
};

export default DeviceList;
