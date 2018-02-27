import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ hour, day }) => {
  return (
    <div className="Card">
      {hour &&
       <div className="hour-cards">
          <h2 className="hour-hour">{hour.hour}</h2>
          <img className="hour-img" src={hour.img} />
          <h2 className="hour-temp">{hour.temp}&deg;F</h2>
        </div>
      }    
      {day &&
        <div className="day-cards">
          <h2 className="day-date">{day.date}</h2>
          <img className="day-img" src={day.img} />
          <h3 className="day-high">{day.high}&deg;F </h3>
          <h3 className="day-low">{day.low}&deg;F</h3>
        </div>
      }
    </div>   
  );  
};

Card.propTypes = {
  hour: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  day: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default Card;