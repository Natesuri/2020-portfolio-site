import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import { HomePage } from './components/home/Home'
import { WorkHistory } from './components/history/WorkHistory'
import { Personal } from './components/personal/Personal'
import { Contact } from './components/contact/Contact'
import { Resume } from './components/resume/Resume'
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
            () => <Contact/>
        }/>
      <Route exact path={NAV.RESUME.route} render={
            () => <Resume/>
        }/>
    </React.Fragment>
  );
}

export default App;
