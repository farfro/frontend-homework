import { useState } from 'react';
import axios from 'axios';

const url = 'https://thronesapi.com/api/v2/Characters';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(url);
            let data = response.data;
            const foundCharacter = data.find((character) => character.fullName.toLowerCase() === searchTerm.toLowerCase());
            
            if (foundCharacter) {
                setCharacter(foundCharacter);
                setError(null);
            } else {
                setCharacter(null);
                setError(`${searchTerm} not found`);
            }
        } 
        catch (error) {
            console.error(error);
            setError('API error');
            setCharacter(null);
        }
        
    }

    return (
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="input-group mb-3">
                <label htmlFor="searchInput" className="col-form-label me-2">Search character name:</label>
                <input
                  type="text"
                  id="searchInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                  placeholder="Enter character name"
                />
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
              </div>
              {error && <p className="text-danger">{error}</p>}
              {character && (
                <div className="card" style={{width: "18rem"}}>
                  <img src={character.imageUrl} alt={character.fullName} className="card-img-top" />
                  <div className="card-body">
                  <h1 className="card-title">{character.fullName}</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
  );
}