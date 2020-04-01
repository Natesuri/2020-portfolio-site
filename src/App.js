import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import { HomePage } from './components/home/Home'
import { WorkHistory } from './components/history/WorkHistory'
import { Header } from './components/header/Header'
function App() {
  return (
    <React.Fragment>
      <Route path='/' render={
            () => <Header/>
        }/>
      <Route exact path='/' render={
            () => <HomePage/>
        }/>
      <Route exact path='/history' render={
            () => <WorkHistory/>
        }/>
      <Route exact path='/skills' render={
            () => <h1>Skills</h1>
        }/>
      <Route exact path='/bonus-features' render={
            () => <h1>Bonus Features</h1>
        }/>
      <Route exact path='/contact' render={
            () => <h1>Contact</h1>
        }/>
      <Route exact path='/resume' render={
            () => <h1>Resume</h1>
        }/>
    </React.Fragment>
  );
}

export default App;
