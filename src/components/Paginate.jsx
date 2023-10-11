import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Paginate = ({paginate,currentPage,pageNumbers,rowPerPage,data}) => {
  console.log(currentPage)
  console.log(rowPerPage)
  return (
    <div className="flex items-center justify-between  border-gray-200 bg-white py-3 sm:px-3 absolute bottom-0 w-full  left-0">
    <div className="flex flex-1 justify-between sm:hidden mx-6">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1 ? true : false}
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </button>
      <button
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
        onClick={() => paginate(currentPage + 1)}
        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </button>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{currentPage === 1 ? 0 : (currentPage - 1 ) * rowPerPage}</span> to{" "}
          <span className="font-medium">{rowPerPage * currentPage}</span> of{" "}
          <span className="font-medium">{data?.length}</span> results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <AiOutlineLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          {pageNumbers.map((number, index) => (
            <button
              key={index}
              onClick={() => paginate(number)}
              className={`hidden lg:block px-3 py-2 mx-1 hover:bg-hoverBlue ${
                number === currentPage
                  ? "bg-red-400 text-white"
                  : "bg-white"
              }  border border-gray-300 `}
              // className="relative z-10 inline-flex items-center bg-blue-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {number}
            </button>
          ))}

          <button
            disabled={
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? true
                : false
            }
            onClick={() => paginate(currentPage + 1)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <AiOutlineRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Paginate
