import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
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
                    <NavLink id="shop" to="#services">
                        Download CV
                    </NavLink>
                </div>
            </div>
            <div className="hero-img">
                <img id="hero-logo" src="/images/bg_1.png" />
            </div>
        </section>
    );
};

export default Hero;
