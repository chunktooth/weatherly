import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../styles/SevenHour.css';

const SevenHour = ({ sevenHourData }) => {
  return (
    <div>
      {
        sevenHourData.map((hour, index) => {
          return <Card key={index} hour={hour} />;
        })
      }
    </div>
  );
};

SevenHour.propTypes = {
  sevenHourData: PropTypes.array 
};

export default SevenHour;
