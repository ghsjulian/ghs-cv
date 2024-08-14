import Header from "./Header";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css"
import "../assets/css/index.css";

const Layouts = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // AOS.init();
        // AOS.refresh();
    }, []);
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layouts;
