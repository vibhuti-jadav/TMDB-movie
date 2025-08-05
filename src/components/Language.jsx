
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

const Language = ({ setLang }) => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem("selected_language") || null;
  });

  const { data } = showMovie.useAllMovieQuery({ endpoint: "configuration/languages" });

  useEffect(() => {
    if (selectedLang) {
      setLang(selectedLang); // Sync with parent
    }
  }, [selectedLang, setLang]);

  const handleSelect = (iso) => {
    localStorage.setItem("selected_language", iso);
    setSelectedLang(iso);
    setOpen(false);
  };

  const selectedLangName = data?.find((l) => l.iso_639_1 === selectedLang)?.english_name;

  return (
    <div className="relative inline-block text-white rounded border my-3 mx-5 px-5 text-left">
      <button onClick={() => setOpen(!open)}>
        {selectedLangName || "Select Language 🔽"}

      </button>


      {open && (
        <div className="z-10 absolute mt-2 w-44 max-h-60 overflow-y-auto bg-black border border-gray-700 rounded">
          <ul>
            {data?.map((ele) => (
              <li key={ele.iso_639_1}>
                <button
                  onClick={() => handleSelect(ele.iso_639_1)}
                  className={`block w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-800 ${selectedLang === ele.iso_639_1 ? "font-bold text-yellow-400" : ""
                    }`}
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
