import React from 'react'

import DoctorCard from '../../components/Doctors/DoctorCard'
import {doctors} from './../../assets/data/doctors'
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  return <>
  <section className='bg-[#fff9ea]'>
    <div className="conatiner text-center">
      <h2 className='heading'>Find a Doctor</h2>
      <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md
      flex items-center'>
        <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full
        focus:outline-none cursor-pointer placeholder:text-textColor' 
        placeholder='Search Doctor'/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    gap-5 lg:grid-cols-4'>
        {doctors.map((doctor)=><DoctorCard index={doctor.id} doctor={doctor}/>)}
    </div>
    </div>
  </section>
  
  <section>
    <div className="container">
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>What our patients say</h2>
        <p className='text_para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim eos magnam pariatur fugit voluptate.</p>
      </div>
      <Testimonial/>
    </div>
  </section>
  </>
}

export default Doctors