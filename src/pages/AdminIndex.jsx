import React from 'react'
import PageWrapper from '../components/PageWrapper'
import MapComponent from '../components/MapComponent'
import Paginate from '../components/Paginate'


const AdminIndex = () => {
  return (
    <PageWrapper>
      <h2 className='my-2 font-bold text-red-500'>İSTASYONLAR</h2>
      <MapComponent/>
      
    </PageWrapper>
  )
}

export default AdminIndex
