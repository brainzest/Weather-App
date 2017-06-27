import React, { Component } from 'react';
import _ from 'lodash';

const round = (data) => _.round(data-273);

export default (props) => {
  console.log(props.data);
  const imgSrc=`https://openweathermap.org/img/w/${props.data.weather[0].icon}.png`;
  return(
    <div className="weather-widget">

      <span className="weather-current">
        Current Weather
      </span>
      <h4  className="weather-header">{props.data.name}</h4>


      <h3>
        <img src={imgSrc}  width="50" height="50" />
        <span>
          {round(props.data.main.temp)}°C
        </span>
      </h3>
      <p className="weather-widget">
        {props.data.weather[0].main}
      </p>


    </div>
  )
}
