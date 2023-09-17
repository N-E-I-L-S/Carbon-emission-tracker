import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import Period from './components/Calculator Page/Period';
import Result from './components/Calculator Page/Result';
import LandingPage from './pages/LandingPage';
import Calculator from './pages/Calculator';
import ResultPage from './pages/ResultPage';
import ChatBot from './pages/Chatbot';
import TableauViz from './pages/Dashboard';
import SetGoals from './components/Calculator Page/SetGoals';
import Forum from './pages/Forum';
import Ranking from './pages/Ranking';
import Visualize from './pages/Visualize';

function App() {
  return (
    <>
     <Router>
      <Navbar/>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/calculate' element={<Period/>}/>
      <Route path='/fill-details' element={<Calculator/>}/>
      <Route path='/result' element={<ResultPage/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/chat' element={<ChatBot/>}/>
      <Route path='/dashboard' element={<TableauViz/>}/>
      <Route path='/set-goals' element={<SetGoals/>}/>

    </Routes>
   </Router>
    </>
  );
}

export default App;
