

function Single({ movie, mov, setMovies}) {

const handleSelect = () => {
  mov(movie);
  setMovies([]);
}


  return (
    
    <div className="box2" >
      <div className="dropdown-content" style={{
            fontSize: '18px',
            color: "black"
          }}
       >
        <div onClick={handleSelect}
          style={{
            fontSize: '18px',
            color: "black",
            backgroundColor: 'none'
          }}
        >
        Movie:{movie.title}, Ranking: {movie.popularity}, Date:{movie.release_date}
        </div>
        </div>
    </div>
  );
}

export default Single;
