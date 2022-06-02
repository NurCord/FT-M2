import React from 'react';
import {Div, Button, H4, H6} from './cardStyle'

export default function Card(props) {
    // acá va tu código
    return <Div>
        <Button onClick = { props.onClose } > X </Button>  
        <H4> { props.name }</H4>  
        <H6> Min: { props.min }º</H6>  
        <H6> Max: { props.max }º</H6> 
        <img src = { `http://openweathermap.org/img/wn/${props.img}@2x.png`} alt = 'Not found'/>
        </Div>
};

/*
export default class Card extends React.Component{
  render(){
    return <div>
        <h1> { this.props.name } </h1> 
        <h2> Min: { this.props.min }º</h2> 
        <h2> Max: { this.props.max }º</h2>
        <img src = { `http://openweathermap.org/img/wn/${this.props.img}@2x.png`}/> 
        <button onClick = { this.props.onClose } > X </button> 
    </div>;
  }
}

*/