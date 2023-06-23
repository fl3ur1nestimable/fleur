import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Welcome from './Welcome';
import Fleur from './Fleur';
import Ayeb from './Ayeb';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/fleur" element={<Fleur />} />
          <Route path="/ayeb" element={<Ayeb />} />
        </Routes>
      </div>
    </Router>
  );

}


export default App;
