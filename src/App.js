import './App.css';

import Home from './pages/Home';

import { Routes, Route } from "react-router-dom";
import Teil1 from './pages/Teil-1';
import Teil2 from './pages/Teil-2';

function App() {
  return (
    <div className="App bg-primary vh-100">
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/teil-1/:pruefung/:tns/:tn" element={<Teil1/>} />
        <Route  path="/teil-2/:pruefung/:tns/:tn" element={<Teil2/>} />
      </Routes>      
    </div>
  );
}

export default App;
