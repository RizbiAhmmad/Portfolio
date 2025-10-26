import React from 'react';
import Banner from './Banner';
import HealthcareSolutions from './HealthCareSolutions';
import MedicalServicesSection from './MedicalServicesSection';
import ClinicTreatments from './ClinicTreatments';


const Home = () => {
    return (
        <div>
            <Banner />
            <HealthcareSolutions />
            <MedicalServicesSection />
            <ClinicTreatments />
        </div>
    );
};

export default Home;