import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Details/Details';
function App() {
  return (
    <div className="App">
  
      <Navbar/>
     <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "add" element = {<Add/>}/>
        <Route path= "/:id" element = {<Details/>}/>
     </Routes>
    </div>
  );
}

export default App;
