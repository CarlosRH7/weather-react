import React from 'react'
import PropTypes from 'prop-types'
import WeatherExtarInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import './styles.css'


// Doble destructuracion
const WeatherData = ({data: {tempeture, weatherState, humidity, wind}}) => {

    return (<div className="weatherDataCont">
                <WeatherTemperature tempeture={tempeture} weatherState={weatherState}/>
                <WeatherExtarInfo humidity={humidity} wind={wind}/>
            </div>)
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        tempeture: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}


export default WeatherData

