import './App.css';

import Home from './pages/Home';

import { Routes, Route } from "react-router-dom";
import Teil1 from './pages/Teil-1';

function App() {
  return (
    <div className="App bg-primary vh-100">
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/teil-1/:pruefung/:tn" element={<Teil1/>} />
      </Routes>      
    </div>
  );
}

export default App;
