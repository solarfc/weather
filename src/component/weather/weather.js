import "../../style/component/_weather.scss";
import React from "react";
import Current from "../current";
import Forecast from "../forecast";

const Weather = ({current, forecast, transformTime}) => {
    const {timezone} = current;

    return (
        <div className="weather">
            <div className="weather__content">
                <div className="weather__content-current">
                    <Current current={current} transformTime={transformTime}/>
                </div>
                <div className="weather__content-forecast">
                    <Forecast forecast={forecast} transformTime={transformTime} timezone={timezone}/>
                </div>
            </div>

        </div>
    )
}

export default Weather;