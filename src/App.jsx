import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cont from './page/Cont';
import Home from './page/Home';
import NotFound from './compo/NotFound';
import Chatbot from './compo/chatbot';
import IT from './page/exp/IT';
import WEBD from './page/exp/WEB';
import ANDROID from './page/exp/ANDROID';
import PYHTON from './page/exp/PYHTON';
import DESIGN from './page/exp/DESIGN';
import ChatbotPopup from './compo/chatbot';
import Windows from './page/exp/Windows';
function App() {
  return (
    <div>

      <Routes >
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/contect' element={<Cont />} />
        <Route path='/chat' element={<Chatbot />} />

        {/* exp */}
        <Route path='/it' element={<IT />} />
        <Route path='/web' element={<WEBD />} />
        <Route path='/android' element={<ANDROID />} />
        <Route path='/python' element={<PYHTON />} />
        <Route path='/design' element={<DESIGN />} />
        <Route path='/windows' element={<Windows />} />

      </Routes>


    </div>
  );
}

export default App;