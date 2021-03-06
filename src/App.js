import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PageFooter from './components/PageFooter/PageFooter';
import PageNav from './components/PageNav/PageNav';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageNav />
      <Switch>
        <Route path={'/'} exact component={HomePage}/>
      </Switch>
      <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
