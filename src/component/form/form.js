import "../../style/component/_form.scss";
import React from "react";

const Form = ({city, loading, onChangeWeather, onChangeCity}) => {
    const isLoad = loading ? "disabled" : null
    return (
        <form action="" onSubmit={onChangeWeather}>
            <div className="form-group">
                <input disabled={isLoad} type="text" value={city} onChange={onChangeCity} placeholder="Search city"/>
            </div>
            <div className="form-group">
                <button type="submit" disabled={isLoad}>Search</button>
            </div>
        </form>
    )
}

export default Form;