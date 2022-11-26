import React from 'react';
import Feture from '../Feture/Feture';
import MedicalCondition from '../MedicalCondition/MedicalCondition';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            
            <main id="main ">
            <Slider></Slider>
                {/* <Feture></Feture> */}
                <MedicalCondition></MedicalCondition>
                </main>
            
        </div>
    );
};

export default Home;