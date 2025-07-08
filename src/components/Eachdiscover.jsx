

import { useParams } from 'react-router-dom';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const EachDiscover = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = showMovie.useAllMovieQuery({ endpoint: `movie/${id}` });

   const { data: videoData, isLoading: videoLoading } = showMovie.useMovieVideoQuery(id);

   console.log(data)

  if (isLoading || videoLoading) return <p className="text-white">Loading movie details...</p>;
  if (isError || !data) return <p className="text-white">Error loading movie details.</p>;

  const trailer = videoData?.results?.find(
    (vid) => vid.site === 'YouTube' && vid.type === 'Trailer'
  );

  return (
    <>
                

<div className=" mx-auto max-w-sm mt-10   shadow-xs" role="group">
  <button type="button" className="px-7 py-2 text-sm  text-gray-400 font-medium  bg-[#090808] border-0 rounded-s-full hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white  dark:focus:ring-blue-500 dark:focus:text-white">
    Trailers
  </button>
  <button type="button" className="px-7 py-2 text-sm text-gray-400  font-medium  bg-[#090808] border-0 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white  dark:focus:ring-blue-500 dark:focus:text-white">
    More To Watch
  </button>
  <button type="button" className="px-7 py-2 text-sm  text-gray-400 font-medium  bg-[#090808] border-0 rounded-e-full hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white  dark:focus:ring-blue-500 dark:focus:text-white">
    Plans
  </button>
</div>



           {/* {trailer ? (
        <iframe
          width="560"
          height="315"
         src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
          title="YouTube trailer"
          frameBorder="0"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white">No trailer available.</p>
      )} */}
     
     <div className=' mt-10 ml-10 mr-10 '>
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} style={{ width: '300px', borderRadius: '8px' }}
           className='max-w-full' 
        /> */}
        
<figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="#">
    <img className="rounded-3xl w-full h-200 object-cover"  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title}/>
  </a>
  <figcaption className="absolute px-4 text-lg text-white bottom-6">
     <div className="content">
              <div className="name">{data.title || data.name}</div>
              <div className='w-6xl mt-4 mb-5'>
              <div className="des text-white font-bold">{data.overview}</div>
              </div>
              <div className="btn">
                <button>See More</button>
                <button>Subscribe</button>
              </div>
            </div> 
  </figcaption>
</figure>


  <a  className="block max-w-[1600px] mt-10 mx-auto p-6 bg-[#7a7977] border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400"> {data.release_date} <span className='ml-2 mr-2'>▪️</span> {data.status}  </p>

<div className='mt-2'>
{
  data.genres.map((ele)=>(
   <span key={ele.id} className="bg-indigo-100  text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300">{ele.name}</span>
  ))
}

      <p className='mt-2'>{data.overview}</p>
</div>

</a>







      </div> 
   
     
      


    </>
  );
};

export default EachDiscover;
