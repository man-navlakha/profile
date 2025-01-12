import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './compo/Navbar';
import One from './compo/One';
import Fea from './compo/Fea';
import About from './compo/About';

function App() {
  return (
    <Router>
        <Navbar />
      <div className="hello overflow-hidden">
        <One />
        <About />
        <Fea />
        {/* Other components */}
      </div>
    </Router>
  );
}

export default App;