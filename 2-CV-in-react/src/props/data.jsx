import React from "react";
import Intro from "../header"; 
import Qualification from '../table.jsx';


function Data(){
    return(
        <div>
            <Intro experience={["job1","job2"]} education={["school1","school2"]} />
            <Qualification startDate="2010" endDate="2014" institution="XYZ University" />
        </div>
    )
}

export default Data;