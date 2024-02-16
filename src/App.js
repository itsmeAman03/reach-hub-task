import logo from './logo.svg';
import './App.css';
import TopPlayers from './Component/TopPlayers';
import SearchBar from './Component/SearchBar';

function App() {
  const handleSearch = (query) => {
    // Implement your search logic here using the 'query' parameter
    console.log('Searching for:', query);
  };

  return (
    <div className="App">
      <div className='search'>
        <SearchBar onSearch={handleSearch} />
      </div>
      <TopPlayers />
    </div>
  );
}

export default App;
