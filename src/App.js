import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gu from './routes/Gu';
import Type from './routes/Type';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:type/:gu">
          <Detail></Detail>
        </Route>
        <Route path="/:type">
          <Gu></Gu>
        </Route>
        <Route path="/">
          <Type></Type>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
