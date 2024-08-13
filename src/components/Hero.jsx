import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
    /*
    const initImg = "./images/ghs_8.png";
    const imgRef = useRef(null);
    useEffect(() => {
        var imgs = "ghs_";
        var count = 1;
        setInterval(() => {
            imgRef.current.src = "images/" + imgs + count + ".png";
            count += 1;
            if (count >= 8) {
                count = 1;
            }
        }, 7000);
    }, []);
*/
    return (
        <section>
            <div className="hero-text">
                <h2>Hello There ! Welcome To My Portfolio</h2>
                <h3 className="sub-title">
                    <ReactTyped
                        strings={[
                            "Web Developer",
                            "Freelacer",
                            "Full Stack Developer",
                            "Developer - Designer",
                            "Website Developer",
                            "Front-End Developer",
                            "Back-End Developer",
                            "PHP Developer",
                            "SEO Expert",
                            "Ethical Programmer"
                        ]}
                        cursorChar="|"
                        typeSpeed={70} // Adjust typing speed here (milliseconds)
                        backSpeed={60} // Adjust backspace speed (milliseconds)
                        loop // Set to loop through the strings continuously
                    />
                </h3>
                 <h4>Let's Know More About Myself</h4>
                <article>
                    I'm Ghs Julian, A Full stack web application developer and
                    designer. I'm from Bangladesh. As a developer i have built
                    my technologies skills. For knowing more about myself please
                    scroll down and read more about myself. You can also hire me
                    for your project or contact with me directly.
                </article>
                <div className="btn-area">
                    <NavLink id="view" to="/contact">
                        Contact Me
                    </NavLink>
                    <NavLink
                        id="shop"
                        download="ghs_julian_cv.pdf"
                        to="/data/cv.pdf"
                    >
                        Download CV
                    </NavLink>
                </div>
            </div>
            <div className="hero-img">
                <img id="hero-logo" src="/images/ghs_8.png" />
            </div>
        </section>
    );
};

export default Hero;
