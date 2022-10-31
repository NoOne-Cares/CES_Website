 
 import {Route,Routes } from 'react-router-dom';
 import Home from './pages/Home';
import './App.css'
import Facility from './pages/facility';
import Member from './pages/Member';
import Gallery from './pages/gallery';
import Developer from './pages/Developer';
import Allumani from './pages/Allumani';
function App() {
  return (
    <div> 
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/facility' element={<Facility/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/allumani' element={<Allumani/>}></Route>
        <Route path='/developers' element={<Developer/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
