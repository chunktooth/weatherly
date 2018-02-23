import React from 'react';
import Card from './Card';
import '../styles/SevenHour.css';

const SevenHour = (props) => {
  return (
    <div>
      {
        props.sevenHourData.map((hour, index) => {
          return <Card key={index} hour={hour} />
        })
      }
    </div>
  );
}

export default SevenHour;