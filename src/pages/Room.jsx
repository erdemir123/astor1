import React ,{useState} from 'react'
import PageWrapper from '../components/PageWrapper'
import AppHeader from '../components/AppHeader'
import Paginate from '../components/Paginate'
import car from "../tabs/car"


const Room = () => {
  const rowPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowPerPage;
  const indexofFirstRow = indexOfLastRow - rowPerPage;
 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(car.length / rowPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginateData =car.sort((a, b) => a.id - b.id).slice(indexofFirstRow, indexOfLastRow)

  console.log(paginateData)

  return (
    <PageWrapper>
    <AppHeader header="Car" subHeader="Home - Car" buttonName="Add Car"/> 
    <div className="bg-white rounded-lg shadow-lg px-6 pt-4 pb-40 relative ">
       
      <table className="table-auto w-full text-left text-[12px] font-light text-gray-500 overflow-x-scroll mt-4">
        <thead className="border-b border-neutral-200 ">
            <tr>
              <th scope="col" className="px-4 py-4 ">
                Id
              </th>
              <th scope="col" className="px-4 py-4">
                Arac Tipi
              </th>
              <th scope="col" className="px-4 py-4">
                Ortalama Şarj Süresi
              </th>
              <th scope="col" className="px-4 py-4">
                Ortalama Fiyat
              </th>
              <th scope="col" className="px-4 py-4">
                Şarj Hızı
              </th>
              <th scope="col" className="px-4 py-4">
                Ortalama Şarj Kapasitesi
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
                  {item.arac_tipi || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.ort_sarj_duration || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.ort_price || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.charging_speed || "-"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {item.ort_charging_capacities || "-"}
                </td>
                
              </tr>))}
          
         
        
        </tbody>
       
      </table>
      <Paginate
          paginate={paginate}
          currentPage={currentPage}
          data={car}
          rowPerPage={rowPerPage}
          pageNumbers={pageNumbers}
        />
        
      </div> 
  </PageWrapper>

  )
}

export default Room



