import React, {useContext} from 'react';
import {DarkMode} from "../DarkModeWrapper/DarkModeWrapper";

import './MainInfo.css'

const MainInfo = (props) => {
  const dateRise = new Date(props.oneDay.sunrise*1000).toString().split(' ');
  const dateSet = new Date(props.oneDay.sunset*1000).toString().split(' ');
  const theme = useContext(DarkMode);
  return (
    <div>
     <div className={theme.darkMode?'mainInfoBodyDark mainInfoBody':'mainInfoBody'}>
        <h1>Temperature:</h1>
        <h2>Day: <span>{props.oneDayTemp.day}°</span></h2>
        <h2>Night: <span>{props.oneDayTemp.night}°</span></h2>
        <h2>Evening: <span>{props.oneDayTemp.eve}°</span></h2>
        <h2>Min: <span>{props.oneDayTemp.min}°</span></h2>
        <h2>Max: <span>{props.oneDayTemp.max}°</span></h2>
        <h1>Feels Like:</h1>
        <h2>Day: <span>{props.oneDayFeels.day}°</span></h2>
        <h2>Night: <span>{props.oneDayFeels.night}°</span></h2>
        <h2>Evening: <span>{props.oneDayFeels.eve}°</span></h2>
        <h1>Pressure:</h1>
        <h2>{props.oneDay.pressure} mm.</h2>
        <h1>Wind Speed:</h1>
        <h2>{props.oneDay.wind_speed} m/s</h2>
        <h1>Sunrise:</h1>
        <h2>{dateRise[4]}</h2>
        <h1>Sunset:</h1>
        <h2>{dateSet[4]}</h2>

      </div>
    </div>


  );
};

export default MainInfo;
