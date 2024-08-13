import React from "react";

const Contact = () => {
    document.title =
        "Contact With Me - If You want to hire me you can contact me here";
    return (
               <main>
            <div className="hero-section">
                <section className="hero-img">
            <article data-aos="zoom-in">
                Full Free to contact with me , as soon as possible I'll response
                you. here's the contact form it's a demo only . if you really
                want to contact me then send messages me on my Facebook or My
                Email. The contact form won't be work, so don't try to contact
                here.
            </article>
                <div id="contact" data-aos="zoom-in" className="col">
                    <img
                        data-aos="zoom-in"
                        id="user"
                        src="/images/ghs_julian_dev.png"
                        alt="Ghs Julian Web Developer Designer"
                    />
                    <h3>
                        <i className="bx bx-message-rounded"></i> Email :
                        info.ghs85@gmail.com
                    </h3>
                    <h3>
                        <i className="bx bx-phone-call"></i>Phone : 01302661227
                    </h3>
                </div>
                </section>
                <section>
                <div data-aos="zoom-in" className="col">
                    <div className="form">
                        <h3>Fill Out This Form</h3>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="number" placeholder="Enter Your Phone" />
                        <input type="email" placeholder="Enter Your Email" />
                        <textarea placeholder="Write Your MpostMessage..."></textarea>
                        <button className="contact-btn">Send Messages</button>
                    </div>
                    </div>
        </section>
        </div>
        </main>
    );
};

export default Contact;
