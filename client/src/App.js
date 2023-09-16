import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import Period from './components/Period';
import Transportation from './components/Transportation';
import Utilities from './components/Utilities';
import FoodAndCloth from './components/FoodAndCloth';
import RestaurantAndAccommodation from './components/RestaurantAndAccommodation';
import Result from './components/Result';

function App() {
  return (
    <>
     <Router>
      <Navbar/>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/period' element={<Period/>}/>
      <Route path='/transportation' element={<Transportation/>}/>
      <Route path='/utilities' element={<Utilities/>}/>
      <Route path='/foodAndCloth' element={<FoodAndCloth/>}/>
      <Route path='/restaurantAndAccommodation' element={<RestaurantAndAccommodation/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
