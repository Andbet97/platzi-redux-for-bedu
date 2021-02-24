// https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './Menu';
import Posts from './Posts';
import Tasks from "./Tasks";
import tasksSave from "./Tasks/Save";
import Users from './Users';

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
            <Route exact path='/tareas' component={Tasks} />
            <Route exact path='/tareas/guardar' component={tasksSave} />
            <Route exact path='/tareas/guardar/:usr_id/:tsk_id' component={tasksSave} />
            <Route exact path='/publicaciones/:key' component={Posts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
