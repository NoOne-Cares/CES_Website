 
 import {Route,Routes } from 'react-router-dom';
 import Home from './pages/Home';
import './App.css'
import Gallery from './components/gallery/gallery';
import Facility from './pages/facility';
import Member from './pages/Member';
function App() {
  return (
    <div> 
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/facility' element={<Facility/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
