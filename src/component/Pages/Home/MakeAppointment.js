import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/Navbar/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex items-center justify-center  p-5 pb-0'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-160px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl font-bold text-primary pb-3'>Appointment</h3>
                <h2 className='text-3xl text-white mb-3'>Make an Appointment Today</h2>
                <p className='text-white leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis harum hic earum repellat saepe velit pariatur, dolorem illo ea iste a iusto quidem modi ipsa possimus molestias consectetur. Doloribus at debitis illum minima sequi nisi autem quaerat corporis dolorum eveniet.</p>
                <Link to='/appointment'><PrimaryButton>Get Appointment</PrimaryButton></Link>
            </div>
        </section>
    );
};

export default MakeAppointment;