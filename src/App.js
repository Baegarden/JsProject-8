import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gu from './routes/Gu';
import Type from './routes/Type';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/select/:type/:gu">
          <Detail></Detail>
        </Route>
        <Route path="/select/:type">
          <Gu></Gu>
        </Route>
        <Route path="/select">
          <Type></Type>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
