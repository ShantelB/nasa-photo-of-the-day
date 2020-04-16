import React, {useState, useEffect} from "react";
import "./App.css";
import Beginning from "./NASA_PAGE/beginning";
import axios from "axios";
import { Alert, Spinner } from 'reactstrap';


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
      
      <Alert color="dark"><Spinner type="grow" color="primary" /> <strong>Space: the final frontier. These are the voyages of the starship Enterprise. Its continuing mission: to explore strange new worlds. To seek out new life and new civilizations. To boldly go where no one has gone before!!!!</strong>
         <span role="img" aria-label='go!'>🚀</span> <Spinner type="grow" color="warning" />
      </Alert>
      <Beginning title={title} copyright={copyright} date={date} image={image} explanation={explanation}/>

    </div>
  );
}

export default App;
