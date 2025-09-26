import React, { useEffect, useState } from "react";
import { showMovie } from "../rtk_Querys/ShowMovieReducer/showMovie";
import Pagination from "./Pagination";
import Language from "./Language";
import MovieGeners from "./MovieGeners";
import Recomandation from "./Recomandation";
import Navbar from "./Navbar";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { toggleType } from "../reduxToolkit/reducers/typeSlice";
import Footer from "./Footer";
import Slider from "./Slider";

const Discover = () => {
  // const [lang, setLang] = useState(() => localStorage.getItem('selectedLang') || null);

  const [lang, setLang] = useState(() => {
    const storedLang = localStorage.getItem("selectedLang");
    return storedLang !== null ? storedLang : null;
  });

  // useEffect(() => {
  //   localStorage.setItem('selectedLang', lang);
  // }, [lang]);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("selectedLang", lang);
    } else {
      localStorage.removeItem("selectedLang");
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
    list,
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
<br />
<br />
<br />
<Slider/>

      <Language
        setLang={(iso) => {
          setLang(iso); 
          setList([]); 
          setPage(1); 
          localStorage.setItem("selectedLang", iso);
        }}
        lang={lang}
      />

      <MovieGeners setList={setList} list={list} />
      


<h1 className="text-5xl md:text-6xl font-extrabold text-white text-center tracking-wide mb-8 relative animate-fadeIn">
  <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"> Discover</span>
  <span className="absolute left-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full transform -translate-x-1/2"></span>
</h1>

      

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.results.map((ele) => (
          <Card key={ele.id} ele={ele} type={type} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    
      <Recomandation id={data.results[0]?.id} type={type} />
      <Footer />
    </>
  );
};

export default Discover;
