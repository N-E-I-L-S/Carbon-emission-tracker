import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/Login';
import Period from './components/Calculator Page/Period';
import Result from './components/Calculator Page/Result';
import LandingPage from './pages/LandingPage';
import Calculator from './pages/Calculator';
import ResultPage from './pages/ResultPage';
import ChatBot from './pages/Chatbot';
import TableauEmbed from './pages/Dashboard';
import SetGoals from './components/Calculator Page/SetGoals';
import Forum from './pages/Forum';
import Ranking from './pages/Ranking';
import Visualize from './pages/Visualize';

function App() {
  return (
    <>
     <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/calculate' element={<Period/>}/>
      <Route path='/fill-details' element={<Calculator/>}/>
      <Route path='/result' element={<ResultPage/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/chat' element={<ChatBot/>}/>
      <Route path='/dashboard' element={<TableauEmbed/>}/>
      <Route path='/set-goals' element={<SetGoals/>}/>
      <Route path='/forum' element={<Forum/>}/>
      <Route path='/rank' element={<Ranking/>}/>

    </Routes>
   </Router>
    </>
  );
}

export default App;
