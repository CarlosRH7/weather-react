import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types'
import Location from './Location'
import transformWeather from './../../services/transformWeather'
import WeatherData from './WeatherData/'
import getUrlWetaherByCity from '../../services/getUrlWeatherByCity'
import './styles.css'



// class component
// El componente se retorna dentro de la funcion render
// Ciclo de vida de un componente
class WeatherLocation extends Component {

    constructor(props) {
        super(props)
        const { city } = props

        this.state = {
            city,
            data: null
        }
        console.log("constructor");
    }

    componentDidMount() {
       console.log("componentDidMount"); 
       this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {

    }
    

    handleUpdateClick = () => {
        const api_weather = getUrlWetaherByCity(this.state.city)

        fetch(api_weather).then(resolve => {
            // console.log(resolve)
            return resolve.json()
        }).then(data => {
            console.log("Resultado handleUpdateClick");
            const newWeather = transformWeather(data)
            console.log(newWeather);
            // debugger

            this.setState({
                data: newWeather
            })
        })

    
    }

    render(){

        console.log("render");
        const { onWeatherLocationClick } = this.props
        const {city, data} = this.state

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                { data ? <WeatherData data={data} /> : <CircularProgress size={50}/>}
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation

