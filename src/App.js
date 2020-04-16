import React from "react";
import "./App.css";
import Beginning from "./NASA_PAGE/beginning";
import Middle from "./NASA_PAGE/middle";
import End from "./NASA_PAGE/end"
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Beginning />
      <Middle />
      <End />
    </div>
  );
}

export default App;
