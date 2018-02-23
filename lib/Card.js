import React from 'react';
import SevenHour from './SevenHour'
import TenDay from './TenDay'
import '../styles/Card.css'

const Card = (props) => {
  return(
    <div className="card">
      {props.hour &&
       <div>
          <h2>{props.hour.hour}</h2>
          <img src={props.hour.img} />
          <h2>{props.hour.temp}&#8457;</h2>
        </div>
      }    
      {props.day &&
        <div>
          <h2>{props.day.date}</h2>
          <img src={props.day.img} />
          <h3>{props.day.high}&#8457;</h3>
          <h3>{props.day.low}&#8457;</h3>
        </div>
      }
    </div>   
  );  
}

export default Card;