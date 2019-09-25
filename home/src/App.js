import React, { useState } from 'react';
import Joke from './Joke'
import Stories from './Stories'

function App() {
  const [userQuery, setUserQuery] = useState(''),
    updateUserQuery = event => {
      setUserQuery(event.target.value)
    },
    searchQuery = event => {
      window.open(`https://www.google.com/search?q=${userQuery}&tbm=isch`, `_blank`);
    },
    handleKeyPress = event => {
      if (event.key === 'Enter') {
        window.open(`https://www.google.com/search?q=${userQuery}&tbm=isch`, `_blank`);
      };
    };

  return (
    <div className="App">
      <h1>Hello Mike</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
