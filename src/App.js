import './App.css';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter,
  // eslint-disable-next-line no-unused-vars
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/myCalculator.js';
import Home from './webPages/home.js';
import Quotes from './webPages/quotes.js';
import Navigation from './components/navigation.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;