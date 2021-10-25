import './App.css';
import Nav from './components/Nav';

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
import {UserProvider} from './contexts/User'

function App() {
  return (
    <UserProvider>
      <UsersProvider>
        <BrowserRouter>
          <Nav/>
          <Switch>
            <Route exact path="/">
              <CategoryMenu />
              {/*      HomeGallery */}
            </Route>

            <Route exact path="/:username/profile">
              <Profile/>
              <ReviewList />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/profile/editor">
              {/* Editor  formInputs ={inputs}*/}
            </Route>

            <Route exact path="/reviews/:review_id">
              <HeaderFullPageReview />
              <ReviewList />
            </Route>

            <Route exact path="/:category/reviews">
              <HeaderCategory />
              <ReviewList />
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
    </UserProvider>
  );
}

export default App;
