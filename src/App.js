import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//page & layout imports
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Faculty from './pages/Faculty';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/department'>
          <Homepage/>
        </Route>
        <Route path='/faculty'>
          <Faculty/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
