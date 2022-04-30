import React from "react";

function About() {
    return(
        <div className="about">
            <h1 className="about">About Me</h1>
            <div className="">
                <img className="profile-pic"
                src={require('../../assets/images/StephanieProfilePic.jpeg')}
                alt="Stephanie"
                />
        </div>
        <div className="about_me">
            <p>
                Full Stack Web Developer with twenty years of experience in Microsoft Office Stack and SharePoint 
                Development. Recently completed the Full Stack Web Development bootcamp certification provided through The University of Texas at
                Austin that focused on HTML/CSS, Javascript, Node.js, React, Git and more. 
                <br></br>
                I am looking forward to using my new skills to grow as a web developer as well and produce successful projects in either a team or independent setting. 
                                
            </p>
        </div>
        </div>
    );
}
export default About;