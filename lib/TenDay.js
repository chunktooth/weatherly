import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../styles/TenDay.css';

const TenDay = ({ tenDayData }) => {
  return (
    <div>
      {
        tenDayData.map((day, index) => {
          return <Card key={index} day={day} />;
        })
      }
    </div>
  );
};

TenDay.propTypes = {
  tenDayData: PropTypes.array
};

export default TenDay;
