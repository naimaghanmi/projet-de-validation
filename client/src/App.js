import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Main from "./component/layouts/main";
import Alert from "./component/layouts/Alert";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import { loadUser } from './actions/auth';
import store from './store';
import {Provider} from 'react-redux';
import NavBar from './component/layouts/navBar';
import Dashboard from './component/dashboard/dashboard';
import CreateProfile from './component/profile-forms/CreateProfile';
import EditProfile from './component/profile-forms/EditProfile';
import Profiles from './component/profiles/Profiles';
import Profile from './component/profile/profile';
import Posts from './component/posts/posts';
import Post from './component/post/post';
import PrivateRoute from './component/routing/PrivateRoute';
import  setAuthToken from './component/utils/setAuthToken';
import  QuiSomme from './component/layouts/quiSomme';
import  Marche from './component/layouts/marche';
import Footer from './component/layouts/footer';




if (localStorage.token){
  setAuthToken(localStorage.token)
  }

const  App=() =>{
  
  useEffect(()=> {
  store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
      <Route exact path='/' component={Main}/>
      <section >
        <Alert />
      <Switch >
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
        <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
        <Route exact path='/profiles' component={Profiles}/>
        <PrivateRoute exact path='/profile/:id' component={Profile}/>
        <PrivateRoute exact path='/posts' component={Posts}/>
        <PrivateRoute exact path='/posts/:id' component={Post}/>
        <Route exact path='/quinous' component={QuiSomme}/>
        <Route exact path='/marche' component={Marche}/>








      </Switch>
     

      </section>
      <Footer/>-
      </Fragment>
      </Router>
      </Provider> 
  );
};

export default App;
