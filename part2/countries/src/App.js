import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [value, setValue] = useState('');
  const [country, setCountry] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    if (value) {
      axios
      // .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${value}`)
        .get(`https://restcountries.com/v3.1/name/${value}`)
        .then(response => {
          const data = response.data;
          console.log(data)
          if (data.length > 10) {
            setError('Too many countries, please make your query more specific.');
            setCountry([]);
            setSuggestions([]);
          }   else if (data.length > 1 && data.length <= 10) {
            setError('');
            setCountry({}); // Clear country details
            setSuggestions(data.map(country => country.name.common));
          } else if (data.length === 1) {
            setError('');
            setCountry(data[0] || {});
            setSuggestions([]);
            if (data[0]?.capital) {
              fetchWeather(data[0].capital);
            }
            
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('An error occurred while fetching data.');
          setCountry([]);
          setSuggestions([]);
        });
    } else if(!value) {
      // Clear suggestions when input is empty
      setSuggestions([]);
      setError('');
    }
  }, [value]);  //vaghti pak mikonim input ro baz change hesab mishe vali chera ba pak shodan refresh nemishe 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the input value to the selected suggestion
    setValue(suggestion);
    // Clear suggestions
    setSuggestions([]);
  };

  const fetchWeather = async capital => {
    try {
      
      const apiKey =  process.env.REACT_APP_API_KEY;
      console.log(apiKey)
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
      );
      setWeather(weatherResponse.data);
      console.log(weather)
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    }
  };

  return (
    <div>
      <label htmlFor="search">Find Countries:</label>
      <input id="search" value={value} onChange={handleChange} /> 
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              {suggestion}
              <button onClick={() =>handleSuggestionClick(suggestion)}>Show</button>
            </li>
          ))}
        </ul>
      )}

      {country.name && (
        <div>
          <h1>{country.name.common}</h1>
          <p>Capital {country.capital}</p>
          <p>Area {country.area}</p>

          {country.languages && (
            <div>
              <h3>Languages:</h3>
              <ul>
                {Object.entries(country.languages).map(([code, name]) => (
                  <li key={code}>{name}</li>
                ))}
              </ul>
            </div>
          )}

          {country.flags?.png && (
            <img
              style={{ margin: "20px 0" }}
              width="100px"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          )}
           {weather && (
            <div>
              <h2>Weather in {country.capital}</h2>
              <p>Temperature: {Math.floor(weather.main.temp-273.15)}°C</p>
              
             <img
               style={{ margin: '20px 0' }}
                width="100px"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                 alt={`${country.name.common} weather icon`}
                  />
                
              <p>Wind: {weather.wind.speed}</p>
            </div>
          )}
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default App;


