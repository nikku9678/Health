import React from 'react'
import staricon from '../../assets/images/Star.png'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const DoctorCard = ({doctor}) => {
    const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital}=doctor;

   
  return (
    <div className='p-5 lg:p-5 border bg-gradient-to-r from-cyan-600 to-purple-500 rounded-xl shadow-lg hover:bg-white mr-8'>
        <div>
            <img src="https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg" className='w-full  shadow-2xl rounded-2xl' alt="" />
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[26px]
        lg:leading-9 text-white font-[700] mt-3 lg:mt-5'>
            {doctor.firstName} {doctor.lastName}
        </h2>
        <div className='mt-2 lg:mt-0 flex items-center justify-between'>
            {/* <h2>kunal</h2> */}
            <span className='bg-white text-cyan-600 py-1 px-2 lg:py-2 lg:px-6 text-[12px] rounded-lg mt-2
            leading-4 lg:text-[16px] lg:leading-7 font-semibold'>
                {doctor.specialization}
            </span>
            <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] leading-6
                lg:text-[16] lg:leading-7 font-semibold text-white'>
                <img src={staricon} alt="" />
                4.3
                </span>
                {/* <span className='text-[14px] leading-6
                lg:text-[16] lg:leading-7 font-semibold text-white'>5</span> */}
            </div>
        </div>
        <div className='mt-[18px] lg:mt-4 flex items-center justify-between bg-white p-2 rounded-lg'>
            <div>
                <h3 className='text-[16px] leading--7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>
                    10k+ Patients
                </h3>
                <p className='text-[14px] leading-6 font-[400]'> At AIMS</p>
            </div>
            <Link to='/login' className='w-[44px] h-[44px] rounded-full border border-solid
            border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-purple-500
            hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
        </div>
    </div>
  )
}

export default DoctorCard