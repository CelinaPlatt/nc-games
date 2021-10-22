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

function App() {
  const [user] = useState({
    username: 'jessjelly',
    name: 'Jess Jelly',
    avatar_url:
      'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });

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
            <ReviewList />
          </Route>

          <Route exact path="/login">
            <Login />
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
            {/* <HeaderFullPageReview/> */}
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
