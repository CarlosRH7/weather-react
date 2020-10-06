import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    CLOUD,
    SUN,
    RAIN, 
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers';
import './styles.css'



const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "show",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers"
}

const getWeatherIcon = weatherState => {
    const sizeIcon = "4x"
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
}


const WeatherTemperature = ({tempeture, weatherState}) => (
    <div className="weatherTemperatureCont">
        
        { getWeatherIcon(weatherState) }
        <span className="tempeture">{ ` ${tempeture} `}</span>
        <span className="tempetureType">{` Cº `}</span> 
    </div>

)

WeatherTemperature.propTypes = {
    tempeture: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature