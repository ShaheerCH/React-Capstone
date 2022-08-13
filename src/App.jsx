import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
import Body from './components/Body/Body';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          { }
          <Route exact path='/' element={<Body />} />
          <Route path='/countries/:name' element={<Country />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App