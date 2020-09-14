import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    CLOUD,
    CLOUDY,  
    SUN,
    RAIN, 
    SNOW,
    WINDY,
} from '../../../constants/weathers';


const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "show",
    [WINDY]: "windy"
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />;
}


const WeatherTemperature = ({tempeture, weatherState}) => (
    <div>
        
        { getWeatherIcon(weatherState) }
        <span>
            { ` ${tempeture} Cº ` }
        </span>
    </div>

)

WeatherTemperature.propTypes = {
    tempeture: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature