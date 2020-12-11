import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';

const Forecast = ({forecast, transformTime, timezone}) => {

    const {list} = forecast;
    const content = list.map(item => {
        return <div className="weather__content-forecast__block" key={item.dt}>
            <p className="date">{new Date((item.dt + timezone) * 1000).toString().slice(4, 25)}</p>
            <p className="image"><img src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${item.weather[0].icon}.png`} alt=""/></p>
            <p className="temp">{Math.round(item.main.temp)}&#176;C</p>
        </div>
    })

    return (
        <>
            <div className="weather__content-forecast__title">
                <p>Date</p>
                <p>Weather</p>
                <p>Temperature</p>
            </div>
            <Scrollbars>
                {content}
            </Scrollbars>
        </>
    )
}

export default Forecast;