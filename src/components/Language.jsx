
// import { useState } from "react";
// import { showMovie } from "../rtk_Querys/ShowMovieReducer/showMovie";

// const Language = ({ setLang, lang }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedLang, setSelectedLang] = useState(null);
//   const { data } = showMovie.useAllMovieQuery({ endpoint: "configuration/languages" });

//   const handleSelect = (iso) => {
//     setLang(iso);
//     setSelectedLang(iso);
//     setOpen(false);
//   };

//   const selectedLangName = data?.find((l) => l.iso_639_1 === selectedLang)?.english_name;

//   return (
//     <div className="relative inline-block text-white rounded border my-3 mx-5 px-5 text-left">
//       <button onClick={() => setOpen(!open)} >
//         {selectedLangName || "Select Language 🔽"} 
//       </button>

//    {open && (
//         <div className="z-10 absolute mt-2 w-44 max-h-60 overflow-y-auto bg-black ">
//           <ul>
//             {data && data.map((ele) => (
//               <li key={ele.iso_639_1}>
//                 <button
//                   onClick={() => handleSelect(ele.iso_639_1)}
//                   className={`block w-full text-left px-4 py-2 cursor-pointer
//                     ${lang === ele.iso_639_1 ? "font-bold" : ""}`} >
//                   {ele.english_name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>

//   );
// };

// export default Language;


import { useState, useEffect } from "react";
import { showMovie } from "../rtk_Querys/ShowMovieReducer/showMovie";

const Language = ({ setLang, lang }) => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => lang || null);
  const { data } = showMovie.useAllMovieQuery({ endpoint: "configuration/languages" });

  // useEffect(() => {
  //   if (selectedLang) {
  //     setLang(selectedLang);
  //   }
  // }, [selectedLang, setLang]);

  //   useEffect(() => {
  //   setLang(selectedLang); // pass null too so parent knows to reset
  // }, [selectedLang, setLang]);




  // const handleSelect = (iso) => { 
  //   setSelectedLang(iso);
  //   setOpen(false);

  //    if (iso === null) {
  //   localStorage.removeItem('selectedLang'); // clear from localStorage
  // }
  // };

  const handleSelect = (iso) => {
    setSelectedLang(iso);
    setLang(iso);
    setOpen(false);

    if (!iso) {
      localStorage.removeItem("selectedLang");
    } else {
      localStorage.setItem("selectedLang", iso);
    }
  };



  const selectedLangName = data?.find((l) => l.iso_639_1 === selectedLang)?.english_name;

  return (
    <div className="relative inline-block text-left mx-5 my-4">
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-between w-56 px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-700 rounded-md hover:bg-gray-800 transition duration-300"
      >

        {selectedLangName || "🌐 Select Language"}
        <i
          className={`ri-arrow-down-s-line ml-2 text-lg transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        ></i>
      </button>

      {/* Dropdown List */}
      {open && (
        <div className="z-20 absolute mt-2 w-56 max-h-64 overflow-y-auto bg-gray-900 border border-gray-700 rounded-md shadow-lg animate-fadeIn">
          <ul className="divide-y divide-gray-800">

            {/* Clear Language Option */}
            <li key="clear">
              <button
                onClick={() => handleSelect(null)}
                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-red-500"
              >
                ❌ Clear Language Filter
              </button>
            </li>


            {data?.map((ele) => (
              <li key={ele.iso_639_1}>
                <button
                  onClick={() => handleSelect(ele.iso_639_1)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200
                    hover:bg-gray-800 hover:text-yellow-400
                    ${selectedLang === ele.iso_639_1 ? "text-yellow-400 font-semibold bg-gray-800" : "text-white"}`}
                >
                  {ele.english_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Language;
