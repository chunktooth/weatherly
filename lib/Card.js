import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ hour, day }) => {
  return (
    <div className="Card">
      {hour &&
       <div>
          <h2>{hour.hour}</h2>
          <img src={hour.img} />
          <h2>{hour.temp}&deg;F</h2>
        </div>
      }    
      {day &&
        <div className="day-card">
          <h2>{day.date}</h2>
          <img src={day.img} />
          <h3>{day.high}&deg;F</h3>
          <h3>{day.low}&deg;F</h3>
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