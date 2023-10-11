import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [value, setValue] = useState('');
  const [country, setCountry] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (value) {
      axios
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
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the input value to the selected suggestion
    setValue(suggestion);
    // Clear suggestions
    setSuggestions([]);
  };

  return (
    <div>
      <label htmlFor="search">Find Countries:</label>
      <input id="search" value={value} onChange={handleChange} /> 

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
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
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default App;


