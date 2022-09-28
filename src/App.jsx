import All from './Components/All'
import './App.scss';

// https://api.themoviedb.org/3/movie/550?api_key=5d7e47d09262ced82a2dc3bde5c96ccc
// http://api.themoviedb.org/3/search/movie?api_key=5d7e47d09262ced82a2dc3bde5c96ccc&language=en-US&query=pie

function App() {
  return (
    <div className="App">
      <header className="miskas">
        <div className='got'>
     <svg><use xlinkHref='#movies'></use></svg>
     <h1 style={{
      paddingTop: '25px'
     }}>THE BEST MOVIES SEARCHING PLATFORM</h1>
     <svg><use xlinkHref='#star'></use></svg>
     </div>
     <All />
     
      </header>
    </div>
  );
}

export default App;
