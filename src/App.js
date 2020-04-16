import React, {useState, useEffect} from "react";
import "./App.css";
import Beginning from "./NASA_PAGE/beginning";
import Middle from "./NASA_PAGE/middle";
import End from "./NASA_PAGE/end";
import axios from "axios";

function App() {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [copyright, setCopyright] = useState()
  const [image, setImage] = useState()
  const [explanation, setExplanation] = useState()


useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
      console.log(response.data.title)
      setTitle(response.data.title)
      setDate(response.data.date)
      setCopyright(response.data.copyright)
      setImage(response.data.url)
      setExplanation(response.data.explanation)

  })

  .catch(error => {
      console.log(error)
  })
},[])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Beginning title={title} copyright={copyright} date={date}/>
      <Middle image={image}/>
      <End explanation={explanation}/>
    </div>
  );
}

export default App;
