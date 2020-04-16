import React, {useState, useEffect} from "react";
import "../App.css";
import "../App";
import axios from "axios";

function End () {

    const [explanation, setExplanation] = useState()

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            setExplanation(response.data.explanation)
        })
    
        .catch(error => {
            console.log(error)
        })
    },[])
    return(
        <div className="end">
            <section className="explanation">
    <p><strong>Explanation: </strong>{explanation}</p>
            </section>

        
        </div>
    )
}

export default End