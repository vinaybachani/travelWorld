import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/weather.png';
import customImg from '../assets/images/weather.png';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque!",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, vitae?"
    },
    {
        imgUrl: customImg,
        title: "Customization",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime!"
    },
]

const ServiceList = () => {
  return (
    <>
        {
            serviceData.map((item, index) => (
            <Col lg='3' key={index}>
                <ServiceCard item={item}/>
            </Col>
            ))}
    </>
  )
}

export default ServiceList
