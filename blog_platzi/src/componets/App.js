// https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './Menu';
import Posts from './Posts';
import Users from './Users';

const Prueba = () => <div>hola</div>;

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div id="margen">
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/tareas' component={Prueba} />
            <Route exact path='/publicaciones/:key' component={Posts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
