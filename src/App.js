import React from 'react';
import './App.css';
import LocationList from './components/LocationList'

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us",
  "Lima,pe",
  "Madrid,es",
]

const handleSelectedLocation = city => {
  console.log(`handleSelectedLocation ${city}`);
}

function App (){
  return (
        <div className="App">
          <LocationList cities={cities} onSelectedLocation={handleSelectedLocation}/>
        </div>
  );
}


  


export default App;
