import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
             {isLoading && <Loader />} 
            <Hero />
        </>
    );
};

export default Home;
