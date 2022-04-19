import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route exact path='/department' element={<Homepage/>}/>
        <Route exact path='/faculty' element={<Faculty/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
