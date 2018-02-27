import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../styles/SevenHour.css';

const SevenHour = ({ sevenHourData }) => {
  return (
    <div className="Seven-hour">
      <div className="hour-rows">
      {
        sevenHourData.map((hour, index) => {
          return <Card key={index} hour={hour} />;
        })
      }
       </div>
    </div>
  );
};

SevenHour.propTypes = {
  sevenHourData: PropTypes.array 
};

export default SevenHour;
