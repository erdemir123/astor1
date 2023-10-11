import React,{useEffect} from 'react'
import PageWrapper from '../components/PageWrapper'
import AppHeader from '../components/AppHeader'
import PaginationCard from '../components/PaginationCard'
import { useGetUsersMutation } from '../store/services/mainApi'

const Personel = () => {
  useEffect(()=>{
    handleDeleteLocation()
  },[])

  const [createUser,{data,isLoading}]=useGetUsersMutation()

  const handleDeleteLocation = async ()=>{
    await createUser(23,0)
  }
  console.log(data)
  return (
    <PageWrapper>
      <AppHeader header="Personnel Listing" subHeader="Home - Personnel List" buttonName="Add Personnel"/> 
      <PaginationCard inputName="Personnels" data ={data?.ret}/>
    </PageWrapper>
  )
}

export default Personel
