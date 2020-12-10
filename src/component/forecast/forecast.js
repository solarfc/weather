import "./forecast.css";
import React from "react";

const Forecast = ({forecast}) => {
    const {list} = forecast;
    const content = list.map(item => {
        return <div className="weather__content-forecast__block" key={item.dt}>
            <p className="date">{item.dt_txt}</p>
            <p className="image"><img src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${item.weather[0].icon}.png`} alt=""/></p>
            <p className="temp">{Math.round(item.main.temp)}&#176;C</p>
        </div>
    })

    return (
        <>
            {content}
        </>
    )
}

export default Forecast;