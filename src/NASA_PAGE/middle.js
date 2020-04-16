import React, {useState, useEffect} from "react";
import "../App.css";
import "../App";
import axios from "axios";

function Middle (props) {
    
    return(
        <div className="middle">

        <section>
            <img src = {props.image} alt ="See Explanation"></img>
        </section>
        
        </div>
    )
}

export default Middle