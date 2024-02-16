
import React , {useState} from 'react'
import './SearchBar.css'
function SearchBar() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSearch = () => {
    
    };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}



export default SearchBar