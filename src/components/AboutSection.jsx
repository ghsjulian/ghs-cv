import React from "react";

const AboutSection = () => {
    document.title = "About Ghs Julian | Read And Know More About Myself";
    return (
        <>
            <section id="about">
                <div className="hero-text">
                    <h2 className="heading">About Myself</h2>
                    <h2>Hello There ! Welcome To My Portfolio</h2>
                    <article>
                        I'm Ghs Julian, A Full stack web application developer
                        and designer. I'm from Bangladesh. As a developer i have
                        built my technologies skills. For knowing more about
                        myself please scroll down and read more about myself.
                        You can also hire me for your project or contact with me
                        directly.
                    </article>
                </div>
                <div className="hero-img">
                    <img id="hero-logo" src="/images/bg_1.png" />
                </div>
            </section>
        </>
    );
};

export default AboutSection;
