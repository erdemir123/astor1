import React , {useEffect ,useState} from 'react'
import PageWrapper from '../components/PageWrapper'
import AppHeader from '../components/AppHeader'
import PaginationCard from '../components/PaginationCard'
import { BiSearchAlt } from "react-icons/bi";

import { useGetAssetsMutation } from '../store/services/mainApi'
import Tables from '../components/Tables';
import Paginate from '../components/Paginate';

const Assets = () => {
  useEffect(()=>{
    handleDeleteLocation()
  },[])

  const [createUser,{data,isLoading}]=useGetAssetsMutation()

  const handleDeleteLocation = async ()=>{
    await createUser(23,0)
  }
  const [filteredName, setFilteredName] = useState("");
  const rowPerPage = 10
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowPerPage;
  const indexofFirstRow = indexOfLastRow - rowPerPage;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
console.log(data)
  const paginateData =
      data && [...data.ret]?.sort((a, b) => a.id - b.id)
      .slice(indexofFirstRow, indexOfLastRow);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.length / rowPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);

  return (
    <PageWrapper>
      <AppHeader header="Asset Listing" subHeader="Home - Asset Listl" buttonName="Add Asset"/> 
      <div className="bg-white rounded-lg shadow-lg px-6 pt-4 pb-40 relative ">
      <div className="mt-4 mb-2 flex justify-between  items-center">
        <div className="flex relative">
          <input
            type="text"
            className="border-none outline-none bg-gray-100 p-2 indent-8 rounded-lg w-80"
            placeholder={`Search Assets`}
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
        name="Assets"
        data={paginateData}
        filteredName={filteredName}
      />
      </div>
     
        <Paginate paginate={paginate} currentPage={currentPage} data={data} rowPerPage={rowPerPage} pageNumbers={pageNumbers}/>
      
      </div>
      
    </PageWrapper>
  )
}

export default Assets
