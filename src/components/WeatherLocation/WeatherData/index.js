import React from 'react'
import WeatherExtarInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import {
    CLOUD,
    CLOUDY,  
    SUN,
    RAIN, 
    SNOW,
    WINDY,
} from '../../../constants/weathers';



const WeatherData = () => (
    <div>
        <WeatherTemperature tempeture={20} weatherState={SUN}/>
        <WeatherExtarInfo humidity={80} wind={"10 m/s"}/>

    </div>
)


export default WeatherData

