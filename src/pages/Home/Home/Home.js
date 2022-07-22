import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;