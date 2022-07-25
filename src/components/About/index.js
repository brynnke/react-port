import React from "react";

function About() {
  return (
    <div>
        <p className="content is-medium">About</p>
        <img className="my-profile" src={process.env.PUBLIC_URL + './assets/images/profile.jpg'} alt="Black and white photo of Brynn Kiloran"/>
        <p className="content is-italic mt-4">
            I am Brynn Kiloran. I am currently working on a full stack web dev certificate with the University of Minnesota bootcamp. I am a new coder learning and working on all my skills.
        </p>
        <p className="content">
            I enjoy learning new things and look foreward to the interaction on my new portfolio!
        </p>
    </div>
  );
}

export default About;