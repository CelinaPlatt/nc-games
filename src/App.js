import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState({
    username: 'jessjelly',
    name: 'Jess Jelly',
    avatar_url:
      'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });


  return (
    <div className="App">
      <Nav avatar={user.avatar_url} />
      <Header/>
      <h1>GAME CRITIC</h1>
    </div>
  );
}

export default App;
