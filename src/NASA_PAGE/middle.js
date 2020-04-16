import React, {useState, useEffect} from "react";
import "../App.css";
import "../App";
import axios from "axios";

function Middle () {
    const [image, setImage] = useState()
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
           
            setImage(response.data.url)
        })
    
        .catch(error => {
            console.log(error)
        })
    },[])
    return(
        <div className="middle">

        <section>
            <img src = {image} alt ="See Explanation"></img>
        </section>
        
        </div>
    )
}

export default Middle