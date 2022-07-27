import React from "react";
import imagesprofile from "../../assets/images/profile.jpg";
import "./about.css";
function About() {
    return (
        <section className="my-5">
            <h1 id="about">About</h1>
            <img src={imagesprofile} className="my-2" style={{ width: "20%" }} alt="mid" />
            <div className="my-2">
                <p>

                    I am Brynn Kiloran. I am currently working on a full stack web
                    dev certificate with the University of Minnesota bootcamp.
                    I am a new coder learning and working on all my skills.
                    I enjoy learning new things and look foreward to the interaction
                    on my new portfolio!
                </p>
            </div>
        </section>
    );
}

export default About;

