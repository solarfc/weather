import "./current.css";
import React from "react";

const Current = ({current}) => {
    const {name, sys: {country}, dt, weather, main: {temp, feels_like}, wind: {speed}} = current;
    const date = new Date(dt * 1000).toString().slice(4,24);
    const {description, icon} = weather[0]
    return (
        <>
            <h1>{name}, {country}</h1>
            <p>{date}</p>
            <img src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`} alt=""/>
            <h2>{temp}&#176;C</h2>
            <h3>{description}</h3>
            <h4>Feels like: {Math.round(feels_like)}&#176;C</h4>
        </>
    )
}

export default Current;
