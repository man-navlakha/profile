import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cont from './page/Cont';
import Home from './page/Home';


function App() {


  return (
    <div className="man-cursor hello overflow-hidden">

<div className="cursor ">
    
      </div>
        {/* <Navbar />
        <One />
        <About />
        <Fea /> */}
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/contect' element={<Cont />} />
        </Routes>
      </div>
  );
}

export default App;