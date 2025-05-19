import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cont from './page/Cont';
import Home from './page/Home';
import NotFound from './compo/NotFound';
function App() {
  return (
    <div >

      <Routes >
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/contect' element={<Cont />} />
      </Routes>



    </div>
  );
}

export default App;