

function Edit({movie}) {

if (movie === null) {
  return;
}    

    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    // const [number, setNumber] = useState('');
    // const [supplier, setSuplier] = useState(0);

    // useEffect(()=>{
    //     if(null === modalData){
    //         return;
    //     }
    //     setName(modalData.name);
    //     setSurname(modalData.surname);
    //     setNumber(modalData.counter_number);
    //     setSuplier(modalData.supplier_id);
    // },[modalData])

    // const save = () =>{
    //     setEditData({
    //         name,
    //         surname,
    //         number,
    //         supplier: parseInt(supplier),
    //         id: modalData.id,
    //     })
    //     setModalData(null);
    // }

  
  return (
    <>
      <div className="box4">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
      <div className="box5"> <span style={{
        fontSize: '30px',
        fontWeight: 'bold'
      }}>{movie.title} </span>
      <span> RANKING: {movie.popularity} </span>
       <span>DATE: {movie.release_date} </span>
      <span> {movie.overview} </span>
      </div>
      </div>
  </>
);
}

export default Edit;