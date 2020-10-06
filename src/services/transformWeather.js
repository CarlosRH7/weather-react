import convert from 'convert-units'
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../constants/weathers';


const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C")
}

const getWeathreState =  weather => {
    const { id } = weather
    if(id < 300){
        return THUNDER
    }else if(id < 400){
        return DRIZZLE
    }else if(id < 600){
        return RAIN
    }else if(id < 700){
        return SNOW
    }else if( id === 800){
        return SUN  
    }else{
        return CLOUD
    }
}

const transformWeather = weather_data => {

    const {humidity, temp } = weather_data.main
    const {speed} =  weather_data.wind
    const weatherState = getWeathreState(weather_data.weather[0])
    const tempeture = Number(getTemp(temp).toFixed(2))

    const data = {
        humidity,
        tempeture,
        weatherState,
        wind :  `${speed} m/s`,
    }

    return data
}


export default transformWeather