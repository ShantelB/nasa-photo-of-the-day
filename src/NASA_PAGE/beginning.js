import React, {useState, useEffect} from "react";
import "../App.css";
import "../App";
import axios from "axios";

function Beginning(props) {
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [copyright, setCopyright] = useState()

useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.title)
        setTitle(response.data.title)
        setDate(response.data.date)
        setCopyright(response.data.copyright)

    })

    .catch(error => {
        console.log(error)
    })
},[])

  return (
      
    <div className="Top">
      <section className="title">
        <h1>{title}</h1>
        <h2>{copyright}</h2>
        <h3>{date}</h3>
      </section>

      
    </div>
  );
}

export default Beginning;