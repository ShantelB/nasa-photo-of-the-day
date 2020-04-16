import React from "react";
import "../App.css";
import "../App";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container,  
} from 'reactstrap';

function Beginning(props) {

  return (
      
    <Container>
    <div className="Top">
      <Card>
      <CardBody className="title">

        
        <CardTitle><h1><strong>{props.title}</strong></h1></CardTitle>
        <CardSubtitle><h2>{props.copyright}</h2></CardSubtitle>
        <CardSubtitle><h2>{props.date}</h2></CardSubtitle>
        </CardBody>

        <CardImg top width="100%" src={props.image} alt="See Explanation" />
        <CardBody className="explanation">
        
    <CardText><strong>Explanation: </strong>{props.explanation}</CardText>

      </CardBody>
      </Card>
      
    </div>
    </Container>
  );
}

export default Beginning;