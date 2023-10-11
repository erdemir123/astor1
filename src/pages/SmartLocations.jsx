import React, { useState,useEffect } from 'react'
import AppHeader from '../components/AppHeader'
import PageWrapper from '../components/PageWrapper'
import users from '../tabs/user'
import Paginate from '../components/Paginate'
import DropDownMenu from "../components/DropDownMenu";

const SmartLocations = () => {
  const rowPerPage = 10;
  const [selectedOption, setSelectedOption] = useState('Gimat Kavşağı');
  const [sortDevices, setSortDevices] = useState("Down");
  const [filteredName, setFilteredName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenDropdown, setIsOpenDropdown] = useState(null)
  const indexOfLastRow = currentPage * rowPerPage;
  const indexofFirstRow = indexOfLastRow - rowPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / rowPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginateData =users.sort((a, b) => a.id - b.id).slice(indexofFirstRow, indexOfLastRow)
  const handleToggleDropdown = (itemId) => {
    if (isOpenDropdown === itemId) {
      setIsOpenDropdown(null); // Açıksa kapat
    } else {
      setIsOpenDropdown(itemId); // Kapalıysa aç
    }
  };
  return (
    <PageWrapper>
      <AppHeader header="User" subHeader="Home - User" buttonName="Add User"/>
      <div className="bg-white rounded-lg shadow-lg px-6 pt-4 pb-40 relative ">
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
                
                
                
                <td className="whitespace-nowrap px-6 py-4" onClick={() => handleToggleDropdown(item.id)}>
                  <span 
                    className={`${
                      item.status === null
                        ? "bg-white"
                        : item.status === "pasif"
                        ? "bg-red-300 text-red-700 pr-6"
                        : "bg-emerald-300 text-emerald-600 pr-4"
                    } whitespace-nowrap p-2 rounded-md font-bold relative`}
                  >
                    {item.status}
                    <DropDownMenu
                          id={item.id}
                          isOpen={isOpenDropdown === item.id}
                          item={item}
                        />
                  </span>
                </td>
                
                
              </tr>))}
          
         
          
        </tbody>
       
      </table>
      <Paginate
          paginate={paginate}
          currentPage={currentPage}
          data={users}
          rowPerPage={rowPerPage}
          pageNumbers={pageNumbers}
        />
        
      </div> 
    </PageWrapper>
  )
}

export default SmartLocations
