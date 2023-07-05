

import Header from './components/Heading';
import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import SuKien from './components/SuKien';
import DiSan from './components/DiSan';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/DiSan' element={<DiSan/>}/>
          <Route path='/SuKien' element={<SuKien/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;