import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const API_KEY = "23f45d0d0053dccafd488246343642e2"; // ✅ Your API key
const Search = () => {
  const type = useSelector((state) => state.typeToggle.type); // 'movie' or 'tv'
  const [query, setQuery] = useState("");
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
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      searchText
    )}&page=1&include_adult=false`;

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
        placeholder={`Search ${type === "movie" ? "Movies" : "TV Shows"}...`}
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
              {type === "movie" ? item.title : item.name} (
              {item.release_date || item.first_air_date || "N/A"})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
