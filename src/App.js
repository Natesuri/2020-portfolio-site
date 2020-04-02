import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import { HomePage } from './components/home/Home'
import { WorkHistory } from './components/history/WorkHistory'
import { Personal } from './components/personal/Personal'
import { Header } from './components/header/Header'
import { NAV } from './constants/constants'

function App() {
  return (
    <React.Fragment>
      <Route path='/' render={
            () => <Header/>
        }/>
      <Route exact path={NAV.HOME.route} render={
            () => <HomePage/>
        }/>
      <Route exact path={NAV.HISTORY.route} render={
            () => <WorkHistory/>
        }/>
      { /* <Route exact path='/skills' render={
            () => <h1>Skills</h1>
        }/> */ }
      <Route exact path={NAV.PERSONAL.route} render={
            () => <Personal/>
        }/>
      <Route exact path={NAV.CONTACT.route} render={
            () => <h1>Contact</h1>
        }/>
      <Route exact path={NAV.RESUME.route} render={
            () => <h1>Resume</h1>
        }/>
    </React.Fragment>
  );
}

export default App;
