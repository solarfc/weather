import "./app.css";
import React, {Component} from "react";
import {getCurrentWeatherData, getForecastWeatherData} from "../../service/service";
import Form from "../form";
import Spinner from "../spinner";
import Weather from "../weather";

export default class App extends Component {
    state = {
        loadingSite: true,
        loadingWeather: false,
        error: false,
        city: '',
        current: [],
        forecast: []
    }

    updateWeather() {
        getCurrentWeatherData(`weather?q=${this.state.city}`)
            .then(res => this.setState({current: res}))
            .catch(e => this.setState({error: e}));
    }

    // update() {
    //     getForecastWeatherData(`onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily`)
    //         .then(res => this.setState({forecast: res}))
    //         .catch(e => this.setState({error: e}))
    // }

    onChangeCity = (e) => {
        e.preventDefault();
        this.setState({city: e.target.value})
    }

    onChangeWeather = (e) => {
        e.preventDefault();
        this.setState({loadingWeather: true});
        this.updateWeather();
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loadingSite: false})
        }, 1500);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.current !== this.state.current) {
            setTimeout(() => {
                this.setState({loadingWeather: false})
            }, 500)
        }
    }

    render() {
        console.log(this.state);
        const {loadingSite, loadingWeather, error, city, current} = this.state;
        const spinner = loadingWeather ? <Spinner /> : null;
        const errorMessage = error ? <div>Error</div> : null;
        const content = !(loadingWeather || error || current.length === 0) ? <Weather current={current}/> : null;

        if(loadingSite) {
            return <div className="loading">
                <Spinner />
            </div>
        }

        return (
            <>
                <header className="header">
                    <div className="container">
                        <Form onChangeWeather={this.onChangeWeather} onChangeCity={this.onChangeCity} city={city}/>
                    </div>
                </header>
                <main role="main">
                    <div className="container">
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                </main>
            </>
        )
    }
};