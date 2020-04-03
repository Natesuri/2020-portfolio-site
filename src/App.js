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
      <Route path='/' component={Header}/>
      <Route exact path={NAV.HOME.route} component={HomePage}/>
      <Route exact path={NAV.HISTORY.route} component={WorkHistory}/>
      <Route exact path={NAV.PERSONAL.route} component={Personal}/>
      <Route exact path={NAV.CONTACT.route} component={Contact}/>
      <Route exact path={NAV.RESUME.route} component={Resume}/>
    </React.Fragment>
  );
}

export default App;
