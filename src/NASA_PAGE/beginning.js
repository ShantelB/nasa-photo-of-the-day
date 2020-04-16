import React, {useState, useEffect} from "react";
import "../App.css";
import "../App";
import axios from "axios";

function Beginning(props) {

  return (
      
    <div className="Top">
      <section className="title">
        <h1>{props.title}</h1>
        <h2>{props.copyright}</h2>
        <h3>{props.date}</h3>
      </section>

      
    </div>
  );
}

export default Beginning;