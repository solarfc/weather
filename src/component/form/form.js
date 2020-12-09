import "./form.css";
import React from "react";

const Form = ({city, onChangeWeather, onChangeCity}) => {
    return (
        <form action="" onSubmit={onChangeWeather}>
            <div className="form-group">
                <input type="text" value={city} onChange={onChangeCity} placeholder="Search city"/>
            </div>
            <div className="form-group">
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default Form;