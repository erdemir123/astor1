import React, { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Modal from "./Modal";

const Tables = ({ name, data, filteredName }) => {
  const [sortDevices, setSortDevices] = useState("Down");
  const [action, setAction] = useState(true);
  const [selectedOption, setSelectedOption] = useState('actions')
  console.log(sortDevices);
  const sortedData = data
    ? filteredName === ""
      ? [...data]
      : [
          ...data.filter((item, index) =>
            item.device_model.includes(filteredName)
          ),
        ]
    : [];

  sortDevices === "Down"
    ? sortedData?.sort((a, b) => a.id - b.id)
    : sortedData?.sort((a, b) => b.id - a.id);
  
    const handleActionSelect = (e, selectedItem) => {
      const selectedId = e.target.id;
      const selectedValue = e.target.value;
      
      if (selectedItem.id === selectedId && selectedValue === 'Edit') {
       console.log("edit çalıştı")
        
      } else if (selectedValue === 'Delete') {
        console.log("delete çalıştı")
      }
  
      // Seçilen değeri güncelle
      setSelectedOption(selectedValue);
    };

  return (
    <div className="overflow-x-scroll md:overflow-hidden w-full my-2">
      <table className="table-auto w-full text-left text-[12px] font-light text-gray-500 overflow-x-scroll">
        <thead className="border-b border-neutral-200 ">
          {name === "Devices" && (
            <tr>
              <th
                scope="col"
                className="px-6 py-4 flex items-center cursor-pointer"
                onClick={() =>
                  setSortDevices(sortDevices === "Up" ? "Down" : "Up")
                }
              >
                <span>ID</span>
                <span className="mt-[0px]">
                  {sortDevices === "Up" ? (
                    <BsArrowUpShort size={18} />
                  ) : (
                    <BsArrowDownShort size={18} />
                  )}
                </span>
              </th>
              <th scope="col" className="px-6 py-4">
                DEVICE NAME
              </th>
              <th scope="col" className="px-6 py-4">
                DEVICE MODEL
              </th>
              <th scope="col" className="px-6 py-4">
                DEVICE TYPE
              </th>
              <th scope="col" className="px-6 py-4">
                STATUS
              </th>
              <th scope="col" className="px-6 py-4">
                ACTIONS
              </th>
            </tr>
          )}
          {(name === "Personnels" || name === "Personnels") && (
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                FIRSTNAME
              </th>
              <th scope="col" className="px-6 py-4">
                LASTNAME
              </th>
              <th scope="col" className="px-6 py-4">
                DEPARMENT
              </th>
              <th scope="col" className="px-6 py-4">
                EMAİL
              </th>

              <th scope="col" className="px-6 py-4">
                PHONE
              </th>
              <th scope="col" className="px-6 py-4">
                DEVİCE MAC
              </th>
              <th scope="col" className="px-6 py-4">
                STATUS
              </th>
              <th scope="col" className="px-6 py-4">
                ACTIONS
              </th>
            </tr>
          )}
          {name === "Campus" && (
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                CAMPUS NAME
              </th>
              <th scope="col" className="px-6 py-4">
                BUILDINGS
              </th>
              <th scope="col" className="px-6 py-4">
                ACTIONS
              </th>
            </tr>
          )}
          {name === "Assets" && (
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                NAME
              </th>
              <th scope="col" className="px-6 py-4">
                TYPE
              </th>
              <th scope="col" className="px-6 py-4">
                DEVICE
              </th>
              <th scope="col" className="px-6 py-4">
                STATUS
              </th>
              <th scope="col" className="px-6 py-4">
                ACTIONS
              </th>
            </tr>
          )}
          {name === "Users" && (
            <tr>
              <th scope="col" className="px-4 py-4">
                ID
              </th>
              <th scope="col" className="px-4 py-4">
                FIRSTNAME
              </th>
              <th scope="col" className="px-4 py-4">
                LASTNAME
              </th>
              <th scope="col" className="px-4 py-4">
                ROLE
              </th>
              <th scope="col" className="px-4 py-4">
                EMAİL
              </th>
              <th scope="col" className="px-4 py-4">
                STATUS
              </th>
              <th scope="col" className="px-4 py-4">
                ACTIONS
              </th>
            </tr>
          )}
          {name === "Room" && (
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                CAPACITY
              </th>
              <th scope="col" className="px-6 py-4">
                FLOOR
              </th>
              <th scope="col" className="px-6 py-4">
                PROJECTION
              </th>
              <th scope="col" className="px-6 py-4">
                STATUS
              </th>
              <th scope="col" className="px-6 py-4">
                ACTIONS
              </th>
            </tr>
          )}
        </thead>

        <tbody>
        {sortedData.length === 0 && (
          <tr className="flex font-medium mt-2"><th>No data available in table...</th></tr>
        )}
          {name === "Devices" &&
            sortedData?.map((item, index) => (
              <tr
                className=" w-full border-b border-neutral-200 font-medium"
                key={index}
              >
                <td className="whitespace-nowrap px-6 py-4">{item.id}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.name || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.device_model}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.device_type}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`${
                      item.status === null
                        ? "bg-white"
                        : item.status === "Passive"
                        ? "bg-red-300 text-red-700"
                        : "bg-emerald-300 text-emerald-600 pr-4"
                    } whitespace-nowrap p-2 rounded-md font-bold`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="select">
                    <select id={item.id} value={selectedOption} onChange={(e) => handleActionSelect(e, item)}>
                      <option >actions</option>
                      <option >Edit</option>
                      <option>Delete</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>
                </td>
              </tr>
            ))}
          {name === "Campus" &&
            sortedData?.map((item, index) => (
              <tr
                className="border-b border-neutral-200 font-medium"
                key={index}
              >
                <td className="whitespace-nowrap px-6 py-4">{item.id}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.name || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.building_count}
                </td>
                <td className="whitespace-nowrap px-6 py-4"><div className="select">
                      <select >
                      <option >actions</option>
                        <option>Edit</option>
                        <option>Delete</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div></td>
              </tr>
            ))}
          {name === "Personnels" &&
            sortedData?.map((item, index) => (
              <tr
                className="border-b border-neutral-200 font-medium"
                key={index}
              >
                <td className="whitespace-nowrap px-6 py-4">{item.id}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.name || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.surname || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.department_id || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.mail || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.phone || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.mac || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`${
                      item.status === null
                        ? "bg-white"
                        : item.status === "Passive"
                        ? "bg-red-300 text-red-700"
                        : "bg-emerald-300 text-emerald-600 pr-4"
                    } whitespace-nowrap p-2 rounded-md font-bold`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="select">
                    <select>
                      <option selected>actions</option>
                      <option>Edit</option>
                      <option>Delete</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>
                </td>
              </tr>
            ))}
          {name === "Assets" &&
            sortedData?.map((item, index) => (
              <tr
                className="border-b border-neutral-200 font-medium"
                key={index}
              >
                <td className="whitespace-nowrap px-6 py-4">{item.id}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.name || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.asset_type || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.device_id || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`${
                      item.status === null
                        ? "bg-white"
                        : item.status === "Passive"
                        ? "bg-red-300 text-red-700"
                        : "bg-emerald-300 text-emerald-600 pr-4"
                    } whitespace-nowrap p-2 rounded-md font-bold`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <div className="select">
                    <select>
                      <option>actions</option>
                      <option>Edit</option>
                      <option>Delete</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>
                  
                </td>
              </tr>
            ))}
        </tbody>
       
      </table>
    </div>
  );
};

export default Tables;
