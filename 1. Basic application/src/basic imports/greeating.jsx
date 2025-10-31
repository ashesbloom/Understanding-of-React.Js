import React from "react";
import img1 from "../assets/Screenshot 2024-08-19 at 02-18-26 cat pfp - Google Search.png"
import "./p2.css"

function Greeting(){ 
    const h2_Style = {
        color: "orange",
        fontSize : "28px",
        textAlign: "center",
        marginTop: "10px"
    }
    return (
        <div>
            <h3 style={h2_Style}>Greeting 👋</h3>
            <br />
            <img src={img1} alt="cat-img" class="img-cont"></img> 
        </div>
    );
}

export default Greeting;