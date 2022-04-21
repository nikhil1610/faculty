import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//page & layout imports
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import Navbar from './components/Navbar';
import Faculty from './pages/Faculty';
import FacultyDetails from './pages/FacultyDetails';
import AuthContextProvider, { AuthContext } from './context/AuthContext';
import Report from './pages/Report';
import ReportGenerate from './pages/ReportGenerate';

function App() {
  console.log('authContext' + useContext(AuthContext));
  // const {state: { isAuthenticated, isLoading }}= useContext(AuthContext);
  // console.log('isAuthenticated'+ isAuthenticated);

  return (
    <Router>
    <AuthContextProvider>
    <div className="App">
    {/* <Navbar/> */}
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route exact path='/department' element={<Homepage/>}/>
        <Route exact path='/faculty' element={<Faculty/>}/>
        <Route path='/faculty-details' element={<FacultyDetails/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/report-generate' element={<ReportGenerate/>}/>
     </Routes>
    </div>
    </AuthContextProvider>
    </Router>
  );
}

export default App;
