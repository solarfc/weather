import "../../style/style.scss"
import React, {Component} from "react";
import Form from "../form";
import Spinner from "../spinner";
import Weather from "../weather";
import {getCurrentWeatherData, getForecastWeatherData} from "../../service/service";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
    state = {
        loading: false,
        error: false,
        city: '',
        current: [],
        forecast: []
    }

    onError = (err) => {
        this.setState({error: true, loading: false})
    };

    updateWeather() {
        getCurrentWeatherData(`weather?q=${this.state.city}`)
            .then(res => this.setState({current: res}))
            .catch(this.onError);
        getForecastWeatherData(`forecast?q=${this.state.city}`)
            .then(res => this.setState({forecast: res, loading: false}))
            .catch(this.onError);
    }

    onChangeCity = (e) => {
        e.preventDefault();
        this.setState({city: e.target.value})
    }

    onChangeWeather = (e) => {
        e.preventDefault();
        this.setState({loading: true, error: false});
        this.updateWeather();
    }

    transformTime = (time) => {
        time = time * 1000;
        let hours = parseInt(time / (60 * 60 * 1000)) % 24,
            minutes = parseInt(time / (60 * 1000)) % 60,
            seconds = parseInt(time / 1000) % 60;
        hours = hours > 9 ? hours : `0${hours}`;
        minutes = minutes > 9 ? minutes : `0${minutes}`;
        seconds = seconds > 9 ? seconds : `0${seconds}`;

        return `${hours}:${minutes}:${seconds}`;
    }

    componentDidMount() {
        setTimeout(() => {
            document.querySelector('.loader').style.cssText = `opacity: 0; z-index: -5`;
        }, 1500);
    }

    render() {
        const {city, loading, error, current, forecast} = this.state;
        const loader = loading ? <Spinner /> : null;
        const errorIndicator = error ? <ErrorIndicator /> : null
        const content = !(loading || error || current.length === 0 || forecast.length === 0) ? <Weather current={current} forecast={forecast} transformTime={this.transformTime}/> : null;

        return (
            <>
                <div className="loader">
                    <div className="loadingio-spinner-ripple-hv12976qly5">
                        <div className="ldio-udl3yj63ky">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="content">
                            <Form loading={loading} onChangeWeather={this.onChangeWeather} onChangeCity={this.onChangeCity} city={city}/>
                            {errorIndicator}
                            {loader}
                            {content}
                        </div>
                    </div>
                </section>
            </>
        )
    }
};