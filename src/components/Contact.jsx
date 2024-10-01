import React, { useRef, useEffect, useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [messages, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const messageRef = useRef(null);

    const showMessage = (type, message) => {
        if (type) {
            messageRef.current.classList.add("success");
            messageRef.current.textContent = message;
        } else {
            messageRef.current.classList.add("error");
            messageRef.current.textContent = message;
        }
        setTimeout(() => {
            setLoading(false);
            messageRef.current.classList.remove("success");
            messageRef.current.classList.remove("error");
            messageRef.current.textContent = "";
        }, 3000);
    };
    const contactNow = e => {
        e.preventDefault();
        if (name.trim() === "") {
            showMessage(false, "Please Enter Your Name!");
            return;
        } else if (email.trim() === "") {
            showMessage(false, "Please Enter Your Email!");
            return;
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ) {
            showMessage(false, "Invalid Email Address!");
            return;
        } else if (phone.trim() === "") {
            showMessage(false, "Please Enter Your Phone Number!");
            return;
        } else if (messages.trim() === "") {
            showMessage(false, "Please Enter Your Messages!");
            return;
        } else {
            setLoading(true);
            showMessage(true, "Sorry ! I Can't Recieve Your Email!");
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    document.title =
        "Contact With Me - Hire Ghs Ghs Julian For Your Project | Contact With Ghs Julian";
    return (
        <>
            <section id="about">
                <div className="hero-text">
                    <h2>Contact With Me !</h2>
                    <article data-aos="zoom-in">
                        Full Free to contact with me , as soon as possible I'll
                        response you. here's the contact form it's a demo only .
                        if you really want to contact me then send messages me
                        on my Facebook or My Email. The contact form won't be
                        work, so don't try to contact here.
                    </article>
                    <div className="contact-info">
                        <h2>Get Connect With Me</h2>
                        <ul>
                            <li>
                                Contact Number : <a>01302661227</a>
                            </li>
                            <li>
                                Outlook Email :<a>ghsjulian@outlook.com</a>
                            </li>
                            <li>
                                Google Email : <a>ghsjulian@gmail.com</a>
                            </li>
                            <li>
                                Facebook Profile :
                                <a
                                    href="https://web.facebook.com/ghs.julian.85"
                                    target="_blank"
                                >
                                    Ghs Julian
                                </a>
                            </li>
                            <li>
                                Linkedin Profile :
                                <a
                                    href="https://linkedin.com/in/gobindo.bhor"
                                    target="_blank"
                                >
                                    Gobindo Bhor
                                </a>
                            </li>
                            <li>
                                Github Profile :
                                <a
                                    href="https://github.com/Ghsjulian"
                                    target="_blank"
                                >
                                    Ghs Julian
                                </a>
                            </li>
                            <li>
                                Country : <a>Bangladesh</a>
                            </li>
                            <li>
                                Division : <a>Sylhet</a>
                            </li>
                            <li>
                                District : <a>Maulvibazar</a>
                            </li>
                            <li>
                                City : <a>Kamolgonj</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form">
                    <h3>Fill Out This Form</h3>
                    <span ref={messageRef} id="message"></span>
                    <input
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        value={name}
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    <input
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <input
                        onChange={e => {
                            setPhone(e.target.value);
                        }}
                        value={phone}
                        type="tel"
                        placeholder="Enter Your Phone Number"
                    />
                    <textarea
                        onChange={e => {
                            setMessage(e.target.value);
                        }}
                        value={messages}
                        placeholder="Write Your Message..."
                    ></textarea>
                    <button onClick={contactNow} className="contact-btn">
                        <div className={loading && "load"}></div>
                        Send Messages
                    </button>
                </div>
            </section>
            <h2>My Hobbies And Passion</h2>
            <section className="article">
                <article>
                    I like to create differnt kinda websites , web applications
                    , databse desgin , api integration , and many more. In my
                    free time i browse internet use AI. to learn new thing , i
                    solve coding problems . i also like to debug others code
                    building new projects and make them dynamic i really like
                    such thing. I learn everything from we3schools,
                    Tutuorialspoint, JavaTpoint etc. You can also visit my
                    skills section that you can verify i am really a web
                    developer.Currently i am learning MERN STACK ando making
                    some projects using MERN STACK technologies. If you are
                    looking a really proffessional web developer you can dirctly
                    contact with me or simply press hire me button on the top
                    right corner.
                </article>
            </section>
        </>
    );
};

export default Contact;
