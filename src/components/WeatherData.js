import React from 'react'
import WeatherExtarInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'



const WeatherData = () => (
    <div>
        <WeatherTemperature tempeture={20} weatherState={''}/>
        <WeatherExtarInfo humidity={80} wind={"10 m/s"}/>

    </div>
)


export default WeatherData

