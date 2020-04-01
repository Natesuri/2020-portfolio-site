import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' render={
          () => <h1>Sup</h1>
      }/>
    <Route exact path='/history' render={
          () => <h1>Work History</h1>
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
