import "./app.scss";
import React, {Component} from "react";
import Form from "../form";
import Spinner from "../spinner";
import Weather from "../weather";
import {getCurrentWeatherData, getForecastWeatherData} from "../../service/service";

export default class App extends Component {
    state = {
        loading: false,
        error: false,
        city: '',
        current: [],
        forecast: []
    }

    updateWeather() {
        getCurrentWeatherData(`weather?q=${this.state.city}`)
            .then(res => this.setState({current: res}))
            .catch(e => this.setState({error: e}));
        getForecastWeatherData(`forecast?q=${this.state.city}`)
            .then(res => this.setState({forecast: res}))
            .catch(e => this.setState({error: e}));
    }

    onChangeCity = (e) => {
        e.preventDefault();
        this.setState({city: e.target.value})
    }

    onChangeWeather = (e) => {
        e.preventDefault();
        this.setState({loadingWeather: true});
        this.updateWeather();
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({loadingSite: false})
    //     }, 1500);
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevState.current !== this.state.current) {
    //         setTimeout(() => {
    //             this.setState({loadingWeather: false})
    //         }, 500)
    //     }
    // }

    render() {
        console.log(this.state);
        const {loading, error, city, current, forecast} = this.state;
        // const spinner = loadingWeather ? <Spinner /> : null;
        // const errorMessage = error ? <div>Error</div> : null;
        const content = !(loading || error || current.length === 0 || forecast.length === 0) ? <Weather current={current} forecast={forecast}/> : null;
        // if(loadingSite) {
        //     return <div className="loading">
        //         <Spinner />
        //     </div>
        // }

        return (
            <section>
                <div className="container">
                    <div className="content">
                        <Form onChangeWeather={this.onChangeWeather} onChangeCity={this.onChangeCity} city={city}/>
                        {content}
                    </div>
                </div>
            </section>
        )
    }
};