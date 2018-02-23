import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ hour, day }) => {
  return (
    <div className="card">
      {hour &&
       <div>
          <h2>{hour.hour}</h2>
          <img src={hour.img} />
          <h2>{hour.temp}&#8457;</h2>
        </div>
      }    
      {day &&
        <div>
          <h2>{day.date}</h2>
          <img src={day.img} />
          <h3>{day.high}&#8457;</h3>
          <h3>{day.low}&#8457;</h3>
        </div>
      }
    </div>   
  );  
};

Card.propTypes = {
  hour: PropTypes.object,
  day: PropTypes.object
};

export default Card;