 import { useState, useEffect } from "react";

function Single({ movie }) {



  

   
  
        

    
  // const [searchMovies, setSearchMovies] = useState("");

  // useEffect(() => {
  //     const results = movie.filter(mv =>
  //       mv.toLowerCase().includes(searchMovies)
  //     );
  //     setSearchResults(results);
  //   }, [searchMovies]);

  return (
    <div className="box" >
      <div className="dropdown-content" style={{
            fontSize: '18px',
            color: "black"
          }}
       >
        <button 
          style={{
            fontSize: '18px',
            color: "black"
          }}
        >
        {movie.title}
        </button>
      </div>
    </div>
  );
}

export default Single;
