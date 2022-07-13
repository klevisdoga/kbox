import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
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
      </BrowserRouter>
    </div>
  );
}

export default App;
