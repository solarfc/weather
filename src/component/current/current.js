import React from "react";

const Current = ({current, transformTime}) => {
    const {name, sys: {country}, dt, timezone, weather, main: {temp, feels_like}, wind: {speed}} = current;
    const date = transformTime((dt + timezone));
    const {description, icon} = weather[0]
    return (
        <>
            <h1>{name}, {country}</h1>
            <p>{date}</p>
            <img src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`} alt=""/>
            <h2>{Math.round(temp)}&#176;C</h2>
            <h3>{description}</h3>
            <h4>Feels like: {Math.round(feels_like)}&#176;C</h4>
        </>
    )
}

export default Current;
