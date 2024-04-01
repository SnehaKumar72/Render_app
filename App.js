import React, { useState, useEffect } from 'react';
import PropertyList from './components/PropertyList';
import './App.css';

const API_URL = 'https://rental-platforms.onrender.com/';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const magicBrixResponse = await fetch(API_URL + 'magicbrix');
        const magicBrixData = await magicBrixResponse.json();

        const acres99Response = await fetch(API_URL + '99acres');
        const acres99Data = await acres99Response.json();

        const housingResponse = await fetch(API_URL + 'housing');
        const housingData = await housingResponse.json();

        const allProperties = [...magicBrixData, ...acres99Data, ...housingData];
        setProperties(allProperties);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="App">
      <h1>Rental Properties</h1>
      <PropertyList properties={properties} />
    </div>
  );
}

export default App;

