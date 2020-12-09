import "./weather.css";

const Weather = ({current}) => {
    const {name, sys: {country}, weather, main: {temp, feels_like, pressure}, wind: {speed}} = current;
    const {description, icon} = weather[0];
    return (
        <div className="current-weather">
            <div className="current-weather__title">
                <div className="current-weather__title-text">
                    <h3>{name}, {country}</h3>
                    <span>{description}</span>
                </div>
                <div className="current-weather__title-img">
                    <img src={`//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`} alt=""/>
                </div>
            </div>
            <div className="current-weather__info">
                <h1>{temp}&#176;C</h1>
                <div className="current__weather__info-block">
                    <h5>Details</h5>
                    <hr/>
                    <ul>
                        <li><p><span>Feels like</span>{Math.round(feels_like)}&#176;C</p></li>
                        <li><p><span>Wind</span>{speed}m/s</p></li>
                        <li><p><span>Pressure</span>{pressure}hPa</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Weather;