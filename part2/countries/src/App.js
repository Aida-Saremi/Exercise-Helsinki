// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [value, setValue] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [country, setCountry] = useState({});
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (searchQuery) {
//       axios
//         .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchQuery}`)
//         .then(response => {
//           const data = response.data;
//           if (data.length > 10) {
//             setError('Too many countries, please make your query more specific.');
//             setCountry([]);
//           } else {
//             setError('');
//             setCountry(data);
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setError('An error occurred while fetching data.');
//           setCountry([]);
//         });
//     }
//   }, [searchQuery]);
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }

//   const onSearch = (event) => {
//     event.preventDefault();
//     setSearchQuery(value);
//   }

//   return (
//     <div>
//       <form onSubmit={onSearch}>
//         Find Countries: <input value={value} onChange={handleChange} />
//         <button type="submit">Search</button>
//       </form>

//       {country.name && (
//         <div>
//           <h1>{country.name.common}</h1>
//           <p>Capital {country.capital}</p>
//           <p>Area {country.area}</p>

//           {country.languages && (
//             <div>
//               <h3>Languages:</h3>
//               <ul>
//                 {Object.entries(country.languages).map(([code, name]) => (
//                   <li key={code}>{name}</li>
//                 ))}
//               </ul>
//             </div>
//           )}



//           {country.flags?.png && (
//             <img
//               style={{ margin: "20px 0" }}
//               width="100px"
//               src={country.flags.png}
//               alt={`${country.name.common} flag`}
//             />
//           //   {/* If country.flags is defined, 
//           //  it checks if country.flags.png is also defined. If it is,
//           //  the expression evaluates to true; otherwise, it evaluates to false.

//           //      &&: This is the logical AND operator. If the condition before it is true,
//           //    it proceeds to the next part. If the condition is false,
//           //     it short-circuits, and the subsequent part is not executed. */}
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [value, setValue] = useState('');
  const [country, setCountry] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (value) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${value}`)
        .then(response => {
          const data = response.data;
          if (data.length > 10) {
            setError('Too many countries, please make your query more specific.');
            setCountry([]);
          } else {
            setError('');
            setCountry(data);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('An error occurred while fetching data.');
          setCountry([]);
        });
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <label >Find Countries:</label>
      <input id="search" value={value} onChange={handleChange} />

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
