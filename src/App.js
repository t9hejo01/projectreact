import React, {useState} from 'react';
import Tweet from './tweet';

function App() {
  
  const [user, setUser] = useState([
      {name: 'John', message: 'Hello there!'},
      {name: 'Erik', message: 'I am Erik'}
    ]);
  
  
  return(
    <div className="app">
      {user.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;