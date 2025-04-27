import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
    document.title =
        "See My Latest Projects | My All Projects Are Included Here | Web Developer Ghs Julian";
    const [loading, setLoading] = useState(false);
    const [Projects_Data, setProject_Data] = useState([]);
    const url = "./data/data.json";
    const fetchData = async url => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setProject_Data(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(url);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div data-aos="zoom-in"  className="one-section">
            <h2 data-aos="zoom-in" id="heading">
                My Latest Projects
            </h2>
            <article>
                I have so many projects and self learning projects. you can
                check it here i have updated the live demo link and screenshots
                please check it out. For more details you can visit my GitHub
                Profile.
                In my 3+ years of experience I built so much projects.
                And here is some projects which i have built using my phone.
                You can also explore my projects source codes in my GitHub.
            </article>
            <div className="projects">
                {loading && (
                    <div className="loader">
                        <h2>Loading...</h2>
                    </div>
                )}
                {Projects_Data.map(project => {
                    return (
                        <div
                            data-aos="zoom-in"
                            className="project"
                            key={project.project_id}
                        >
                            <img
                                src={project.project_img}
                                alt="Ghs Julian - Projects"
                            />
                            <h3 className="title"> {project.project_name}</h3>
                            <NavLink to={project.project_url} target="_blank">
                                View Demo
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
