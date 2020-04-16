import React, {useState, useEffect} from "react";
import "../App.css";
import "../App";
import axios from "axios";

function End (props) {

    return(
        <div className="end">
            <section className="explanation">
    <p><strong>Explanation: </strong>{props.explanation}</p>
            </section>

        
        </div>
    )
}

export default End