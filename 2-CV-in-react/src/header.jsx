import React from "react";
import profileImg from "./assets/profile-img.jpeg";

function Intro( props ) {
    return (
        <div className="intro border-2 border-gray-300 rounded-2xl m-8 shadow-lg">
            <div className="flex justify-between items-start p-6">
                <div className="title-info ml-4">
                    <p className="name">Name: Mayank Pandey</p>
                    <p className="Address">Address: Phagwara, Punjab, India</p>
                    <p className="Email">Email: id.ashesbloom@gmail.com</p>
                    <p className="Phone no">Phone: +91 6386369699</p>
                </div>
                <div className="title-img flex justify-end items-center">
                    <img src={profileImg} alt="Mayank Pandey" className="w-32 h-32 border-2 border-gray-300 rounded-2xl" />
                </div>
            </div>
            <div className="experience border-t-2 border-gray-300 p-6 mr-8 ml-8">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <ul className="list-disc list-inside">
                    {props.experience.map(job => (
                        <li>{job}</li>
                    ))}
                </ul>
            </div>  
            <div className="education border-t-2 border-gray-300 p-6 mr-8 ml-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <ul className="list-disc list-inside">
                    {props.education.map(edu => (
                        <li>{edu}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Intro;