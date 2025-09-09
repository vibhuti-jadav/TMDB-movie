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


// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const API_KEY = 'YOUR_API_KEY_HERE';

// const Search = () => {
//   const type = useSelector((state) => state.typeToggle.type);
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Debounce effect: runs search 500ms after last keystroke
//   useEffect(() => {
//     if (!query) {
//       setResults([]);
//       return;
//     }

//     const delayDebounce = setTimeout(() => {
//       fetchResults(query);
//     }, 500);

//     return () => clearTimeout(delayDebounce);
//   }, [query, type]);

//   const fetchResults = async (searchText) => {
//     const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchText)}&page=1&include_adult=false`;

//     try {
//       setLoading(true);
//       const res = await fetch(url);
//       if (!res.ok) throw new Error('API error');
//       const data = await res.json();
//       setResults(data.results || []);
//     } catch (err) {
//       console.error(err);
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* <input
//         type="text"
//         placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}`}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       {loading && <p>Loading...</p>}

//       <ul>
//         {results.length === 0 && query && !loading && <li>No results found.</li>}
//         {results.map((item) => (
//           <li key={item.id}>
//             {type === 'movie' ? item.title : item.name} ({item.release_date || item.first_air_date})
//           </li>
//         ))}
//       </ul> */}
//       <input
//   type="text"
//   placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}...`}
//   value={query}
//   onChange={(e) => setQuery(e.target.value)}
//   className="w-full md:w-1/2 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
// />

// <ul className="mt-4 space-y-2">
//   {loading && <p className="text-white">Loading...</p>}
//   {!loading && query && results.length === 0 && (
//     <li className="text-gray-400">No results found.</li>
//   )}
//   {results.map((item) => (
//     <li key={item.id} className="text-white">
//       {type === 'movie' ? item.title : item.name} ({item.release_date || item.first_air_date || 'N/A'})
//     </li>
//   ))}
// </ul>
//     </div>
//   );
// };

// export default Search;



// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const API_KEY = '23f45d0d0053dccafd488246343642e2'; // Replace with your TMDB API key

// const Search = () => {
//   const type = useSelector((state) => state.typeToggle.type); // 'movie' or 'tv'
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Debounce search input
//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       setError('');
//       return;
//     }

//     const timeoutId = setTimeout(() => {
//       fetchResults(query);
//     }, 500);

//     return () => clearTimeout(timeoutId);
//   }, [query, type]);

//   const fetchResults = async (searchText) => {
//     setLoading(true);
//     setError('');

//     const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchText)}&page=1&include_adult=false`;

//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error('Failed to fetch from TMDB API');
//       const data = await res.json();
//       setResults(data.results || []);
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred while fetching results.');
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <input
//         type="text"
//         placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}...`}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       <div className="mt-4">
//         {loading && <p className="text-blue-400">Loading...</p>}
//         {error && <p className="text-red-400">{error}</p>}
//         {!loading && !error && query && results.length === 0 && (
//           <p className="text-gray-400">No results found.</p>
//         )}

//         <ul className="space-y-3 mt-2">
//           {results.map((item) => (
//             <li key={item.id} className="text-white bg-gray-700 rounded px-4 py-2">
//               <div className="font-semibold">
//                 {type === 'movie' ? item.title : item.name}
//               </div>
//               <div className="text-sm text-gray-400">
//                 {type === 'movie' ? 'Release Date' : 'First Air Date'}:{' '}
//                 {item.release_date || item.first_air_date || 'N/A'}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Search;




// import React, { useState, useEffect } from 'react';

// const API_KEY = '23f45d0d0053dccafd488246343642e2'; // Replace this with your TMDB API key
// const TYPE = 'movie'; // Or 'tv', or make it dynamic if you want

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       setError('');
//       return;
//     }

//     const delay = setTimeout(() => {
//       fetchResults(query);
//     }, 500);

//     return () => clearTimeout(delay);
//   }, [query]);

//   const fetchResults = async (searchText) => {
//     setLoading(true);
//     setError('');

//     const url = `https://api.themoviedb.org/3/search/${TYPE}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchText)}&page=1&include_adult=false`;

//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error('API error');
//       const data = await res.json();
//       setResults(data.results || []);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch results.');
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
//       />

//       {loading && <p className="text-blue-400 mt-2">Loading...</p>}
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {!loading && query && results.length === 0 && (
//         <p className="text-gray-400 mt-2">No results found.</p>
//       )}

//       <ul className="mt-4 space-y-3">
//         {results.map((item) => (
//           <li key={item.id}>
//             <a
//               href={`https://www.themoviedb.org/${TYPE}/${item.id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block p-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
//             >
//               <div className="font-bold text-lg">
//                 {item.title || item.name}
//               </div>
//               <div className="text-sm text-gray-400">
//                 {item.release_date || item.first_air_date || 'No date'}
//               </div>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;






import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const API_KEY = '23f45d0d0053dccafd488246343642e2'; // ✅ Your API key
const Search = () => {
  const type = useSelector((state) => state.typeToggle.type); // 'movie' or 'tv'
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delay = setTimeout(() => {
      fetchResults(query);
    }, 500);

    return () => clearTimeout(delay);
  }, [query, type]);

  const fetchResults = async (searchText) => {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchText)}&page=1&include_adult=false`;

    try {
      setLoading(true);
      const res = await fetch(url);
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
    <div className="p-4">
      <input
        type="text"
        placeholder={`Search ${type === 'movie' ? 'Movies' : 'TV Shows'}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="mt-4 space-y-2">
        {loading && <li className="text-white">Loading...</li>}
        {!loading && query && results.length === 0 && (
          <li className="text-gray-400">No results found.</li>
        )}
        {results.map((item) => (
          <li key={item.id}>
            <Link
              to={`/${type}/${item.id}`}
              className="block p-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            >
              {type === 'movie' ? item.title : item.name} ({item.release_date || item.first_air_date || 'N/A'})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;























