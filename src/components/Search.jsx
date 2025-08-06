// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// const API_KEY = 'YOUR_API_KEY_HERE';

// const Search = () => {
//   const type = useSelector((state) => state.typeToggle.type); // assuming your slice stores in state.type.value
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!query) return;

//     const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`;

//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error('API error');
//       const data = await res.json();
//       setResults(data.results);
//     } catch (err) {
//       console.error(err);
//       setResults([]);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input 
//           type="text" 
//           placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}`} 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} 
//         />
//         <button type="submit">Search</button>
//       </form>

//       <ul>
//         {results.map(item => (
//           <li key={item.id}>
//             {type === 'movie' ? item.title : item.name} ({item.release_date || item.first_air_date})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'YOUR_API_KEY_HERE';

const Search = () => {
  const type = useSelector((state) => state.typeToggle.type);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce effect: runs search 500ms after last keystroke
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchResults(query);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, type]);

  const fetchResults = async (searchText) => {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchText)}&page=1&include_adult=false`;

    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.length === 0 && query && !loading && <li>No results found.</li>}
        {results.map((item) => (
          <li key={item.id}>
            {type === 'movie' ? item.title : item.name} ({item.release_date || item.first_air_date})
          </li>
        ))}
      </ul> */}
      <input
  type="text"
  placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}...`}
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="w-full md:w-1/2 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<ul className="mt-4 space-y-2">
  {loading && <p className="text-white">Loading...</p>}
  {!loading && query && results.length === 0 && (
    <li className="text-gray-400">No results found.</li>
  )}
  {results.map((item) => (
    <li key={item.id} className="text-white">
      {type === 'movie' ? item.title : item.name} ({item.release_date || item.first_air_date || 'N/A'})
    </li>
  ))}
</ul>
    </div>
  );
};

export default Search;




