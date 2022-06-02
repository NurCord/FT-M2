import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import data from './data.js';
import Video from './components/Video/Video.jsx';

function App() {
  return (
    <div>
      <Video/>
      <div className="App">
        <div>
          <SearchBar onSearch={(ciudad) => alert(ciudad)}/>
        </div>
        <div>
          <Cards cities={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
