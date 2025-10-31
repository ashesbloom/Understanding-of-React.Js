import React from "react";

function Tablediv(){
    return(
        <div>
            <table border="1px" style={{width: "50%", margin: "auto", textAlign: "center", marginTop: "20px"}}>
                <tr>
                    <th> Name </th>
                    <th> Age </th>
                    <th> City </th>
                </tr>
                <tr>
                    <td> Alice </td>
                    <td> 24 </td>
                    <td> New York </td>
                </tr>
                <tr>
                    <td> Bob </td>
                    <td> 27 </td>
                    <td> San Francisco </td>
                </tr>
                <tr>
                    <td> Charlie </td>
                    <td> 22 </td>
                    <td> Los Angeles </td>
                </tr>
            </table>
        </div>
    );
}

export default Tablediv;