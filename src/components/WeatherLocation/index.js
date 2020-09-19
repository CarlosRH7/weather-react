import React, {Component} from 'react'
import Location from './Location'
import WeatherData from './WeatherData/'
import './styles.css'
import {
    SUN,
    WINDY
} from '../../constants/weathers';
 
const data = {
    tempeture: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    tempeture: 15,
    weatherState: WINDY,
    humidity: 13,
    wind: '17 m/s'
}

// class component
// El componente se retorna dentro de la funcion render
class WeatherLocation extends Component {

    constructor() {
        super()
        this.state = {
            city: 'Buenos aires',
            data: data
        }
    }

    handleUpdateClick = () => {
        console.log("Actualizado");
        // actualizar el datos en el state
        this.setState({
            data: data2
        })
    }

    render(){

        const {city, data} = this.state

        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}


export default WeatherLocation



