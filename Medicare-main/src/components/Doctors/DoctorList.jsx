import React,{useState,useEffect} from 'react'
import {doctors} from '../../assets/data/doctors'
import DoctorCard from './DoctorCard.jsx'
import axios from 'axios';
const DoctorList = () => {
  const [doctors,setDoctors] = useState([])
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/getAllDoctors",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        } 
        );
      
      if(res.data.success){
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map((doctor)=><DoctorCard index={doctor.id} doctor={doctor}/>)}
    </div>
  )
}

export default DoctorList