import "./_weather.scss";
import React from "react";
import Current from "../current";
import Forecast from "../forecast";

const Weather = ({current, forecast}) => {

    return (
        <div className="weather">
            <div className="weather__content">
                <div className="weather__content-current">
                    <Current current={current}/>
                </div>
                <div className="weather__content-forecast">
                    <Forecast forecast={forecast} />
                </div>
            </div>

        </div>
    )
}

export default Weather;