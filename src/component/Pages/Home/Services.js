import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teethWhitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: teethWhitening
        },
    ]
    return (

        < div className='px-12 my-28' >
            <div className="text-center">
                <h3 className='text-xl font-bold uppercase text-primary'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;