import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateFeedback from '../pages/CreateFeedback';
import FeedbacksReceived from '../pages/FeedbacksReceived';
import GetCreatedFeedback from '../pages/GetCreatedFeedbacks';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import UpdateFeedback from '../pages/UpdateFeedback';
import SignUp from '../pages/SignUp';

export default function Router (){
  return(
    <Switch>
      <Route path="/" exact component={SignUp}/>
      <Route path="/home" exact component={HomePage}/>
      <Route path="/signin" exact component={LoginPage}/>
      <Route path="/createfeedback/:id" exact component={CreateFeedback}/>
      <Route path="/update/:id" exact render={(props) => <UpdateFeedback {...props}/>} />
      <Route path="/getfeedbackreceived/" exact component={FeedbacksReceived}/>
      <Route path="/getcreatefeedback/" exact component={GetCreatedFeedback}/>
    </Switch>)
}