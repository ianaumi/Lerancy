import Navbar from './Components/Navbar';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home'
import About from './Routes/About'
import Resources from './Routes/Resources'

function App() {
  
  return (  
    <div className="App">
      
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/resources"element={<Resources/>}/>
        </Routes>
        
    </div>
  );
}

export default App;