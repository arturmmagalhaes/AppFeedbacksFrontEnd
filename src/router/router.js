import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateFeedback from '../pages/CreateFeedback';
import FeedbacksReceived from '../pages/FeedbacksReceived';
import GetCreatedFeedback from '../pages/GetCreatedFeedbacks';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UpdateFeedback from '../pages/UpdateFeedback';

export default function Router (){
  return(
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/signin" exact component={LoginPage}/>
      <Route path="/createfeedback/:id" exact component={CreateFeedback}/>
      <Route path="/update/:id" exact component={UpdateFeedback}/>
      <Route path="/getfeedbackreceived/" exact component={FeedbacksReceived}/>
      <Route path="/getcreatefeedback/" exact component={GetCreatedFeedback}/>
    </Switch>)
}