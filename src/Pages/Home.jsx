import React from 'react';
import Banner from './Banner';
import HealthcareSolutions from './HealthCareSolutions';
import MedicalServicesSection from './MedicalServicesSection';


const Home = () => {
    return (
        <div>
            <Banner />
            <HealthcareSolutions />
            <MedicalServicesSection />
        </div>
    );
};

export default Home;