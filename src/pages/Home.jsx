import React from 'react';
import Hero from "../component/Hero";
import DoctorsContainer from "../component/DoctorsContainer";
import { useLoaderData } from 'react-router';

const Home = () => {
   
    const data=useLoaderData();
    

    return (
        <div>
           <Hero></Hero>
           <DoctorsContainer doctors={data}></DoctorsContainer>
        </div>
    );
};

export default Home;