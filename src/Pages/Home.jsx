import React from 'react';
import Banner from './Banner';
import HealthcareSolutions from './HealthCareSolutions';
import MedicalServicesSection from './MedicalServicesSection';
import ClinicTreatments from './ClinicTreatments';
import QualifiedDoctors from './QualifiedDoctors';


const Home = () => {
    return (
        <div>
            <Banner />
            <HealthcareSolutions />
            <MedicalServicesSection />
            <ClinicTreatments />
            <QualifiedDoctors />
        </div>
    );
};

export default Home;