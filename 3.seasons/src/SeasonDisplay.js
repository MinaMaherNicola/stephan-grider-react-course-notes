import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    icon: 'fas fa-sun fa-7x'
  },
  winter: {
    text: 'Burr, its chilly',
    icon: 'far fa-snowflake fa-7x'
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <span>
        <i className={`icon-left ${icon}`}></i>
      </span>
      <h1>{text}</h1>
      <span>
        <i className={`icon-right ${icon}`}></i>
      </span>
    </div>
  );
};

export default SeasonDisplay;

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
// <i class="far fa-snowflake"></i>
// <i class="fas fa-sun"></i>
