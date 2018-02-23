import React from 'react';
import Card from './Card';
import '../styles/TenDay.css';

const TenDay = (props) => {
  return (
    <div>
      {
        props.tenDayData.map((day, index) => {
          return <Card key={index} day={day} />
        })
      }
    </div>
  );
}

export default TenDay;