import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CategoryMenu from './components/CategoryMenu';

function App() {
  const [user, setUser] = useState({
    username: 'jessjelly',
    name: 'Jess Jelly',
    avatar_url:
      'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });

  return (
    <BrowserRouter>
      <Nav avatar={user.avatar_url} username={user.username} />
      <Switch>
        <Route exact path="/">
          <CategoryMenu />
          {/*      HomeGallery */}
        </Route>
        <Route exact path="/profile">
          <Profile user={user} />
          <ReviewList avatar={user.avatar_url} username={user.username} />
        </Route>
        <Route exact path="/login">
          {/* Login  loginInputs ={inputs}*/}
        </Route>
        <Route exact path="/register">
          {/* Login  registerInputs ={inputs}*/}
        </Route>
        <Route exact path="/profile/editor">
          {/* Editor  formInputs ={inputs}*/}
        </Route>
        <Route exact path="/reviews/:category">
          <Header />
          <ReviewList avatar={user.avatar_url} username={user.username} />
        </Route>
        <Route exact path="/reviews/:review_id">
          {/* Editor  formInputs ={inputs}*/}
        </Route>
        <Route exact path="/reviews/:review_id/editor">
          {/* Review */}
        </Route>
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
