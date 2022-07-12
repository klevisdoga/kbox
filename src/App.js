import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PageNav from './components/PageNav/PageNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageNav />
      <Switch>
        <Route />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
