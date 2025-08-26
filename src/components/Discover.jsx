import React, { useEffect, useState } from 'react';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';
import Pagination from './Pagination';
import Language from './Language';
import MovieGeners from './MovieGeners';
import Recomandation from './Recomandation';
import Navbar from './Navbar';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { toggleType } from '../reduxToolkit/reducers/typeSlice';

const Discover = () => {

 // const [lang, setLang] = useState(() => localStorage.getItem('selectedLang') || null);

const [lang, setLang] = useState(() => {
  const storedLang = localStorage.getItem('selectedLang');
  return storedLang !== null ? storedLang : null;
});


  // useEffect(() => {
  //   localStorage.setItem('selectedLang', lang);
  // }, [lang]);

useEffect(() => {
  if (lang) {
    localStorage.setItem('selectedLang', lang);
  } else {
    localStorage.removeItem('selectedLang');
  }
}, [lang]);


  const dispatch = useDispatch();
  const type = useSelector((state) => state.typeToggle.type);

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  // const { data, isLoading, error } = showMovie.useAllMovieQuery({
  //   endpoint: `discover/${type}`, page: page, lang: lang, list: list,
  // });

  const query = {
  endpoint: `discover/${type}`,
  page,
  list
};

if (lang) {
  query.lang = lang; // ✅ Only include if non-null
}

const { data, isLoading, error } = showMovie.useAllMovieQuery(query);


  const handleToggleType = () => {
    dispatch(toggleType());
    setPage(1);
  };

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Failed to load movies.</div>;
  if (!data || !data.results) return <div>No movies found.</div>;

  return (
    <>
      <Navbar toggleType={handleToggleType} type={type} />
      {/* <Language setLang={setLang} /> */}
      {/* <Language
  setLang={(iso) => {
    if (iso === null) {
      setLang("");      // Reset language filter
      setList([]);      // Clear genres if needed
      setPage(1);       // Reset page
    } else {
      setLang(iso);     // Apply selected language
      setList([]);
      setPage(1);
      localStorage.setItem('selectedLang', iso);
    }
  }}
  lang={lang}
/> */}
<Language
  setLang={(iso) => {
    setLang(iso);         // 🔁 updates Discover state
    setList([]);          // resets genres
    setPage(1);           // resets page
    localStorage.setItem('selectedLang', iso);
  }}
  lang={lang}
/>

      <MovieGeners setList={setList} list={list} />

      {/* <h1 className="font-bold text-white text-center text-2xl">Discover</h1> */}
      <h1 className="text-5xl font-extrabold text-white text-center tracking-wide mb-8 relative">
  <span className="relative z-10">Discover</span>
  <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-blue-700 rounded-full transform -translate-x-1/2"></span>
</h1>


      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.results.map((ele) => (
          <Card key={ele.id} ele={ele} type={type} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
      <Recomandation />
    </>
  );
};

export default Discover;

