import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import ReviewList from './components/ReviewList';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CategoryMenu from './components/CategoryMenu';
import { UsersProvider } from './contexts/Users';
import HeaderCategory from './components/HeaderCategory.jsx';
import HeaderUserReviews from './components/HeaderUserReviews';
import HeaderFullPageReview from './components/HeaderFullPageReview';
import Login from './components/Login';
import Register from './components/Register';
import {useEffect} from 'react'

function App() {
  const [user,setUser] = useState({
      // username: 'jessjelly',
      // name: 'Jess Jelly',
      // avatar_url:
      //   'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });
  
console.log(user,"<<<user in App")

  useEffect(() => {
    const stringifiedPrevLoggedInUser = localStorage.getItem('loggedInUser');
    const prevLoggedInUser = JSON.parse(stringifiedPrevLoggedInUser);

    if (stringifiedPrevLoggedInUser) {
      setUser(prevLoggedInUser);
    }
  }, []);

  return (
    <UsersProvider>
      <BrowserRouter>
        <Nav avatar={user.avatar_url} username={user.username} />
        <Switch>
          <Route exact path="/">
            <CategoryMenu />
            {/*      HomeGallery */}
          </Route>

          <Route exact path="/:username/profile">
            <Profile user={user} />
            {/* <Profile /> */}
            <ReviewList />
          </Route>

          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
            {/* Login  loginInputs ={inputs}*/}
          </Route>

          <Route exact path="/register">
            <Register/>
            {/* Login  registerInputs ={inputs}*/}
          </Route>

          <Route exact path="/profile/editor">
            {/* Editor  formInputs ={inputs}*/}
          </Route>

          <Route exact path="/reviews/:review_id">
            <HeaderFullPageReview/>
            <ReviewList />
          </Route>

          <Route exact path="/:category/reviews">
            <HeaderCategory />
            <ReviewList avatar={user.avatar_url} username={user.username} />
          </Route>

          <Route exact path="/users/:username/reviews">
            <HeaderUserReviews />
            <ReviewList />
          </Route>

          <Route exact path="editor/reviews/:review_id">
            {/* Review */}
          </Route>
        </Switch>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
