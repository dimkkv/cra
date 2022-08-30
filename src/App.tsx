import React from 'react';
import './App.css';
// import TableFooter from './components/content/dashboard/table-footer';
import Dashboard from 'components/content/dashboard';
import ImmunaApp from 'components/layout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alerts from 'components/content/alerts';
import Defend from 'components/content/defend';

function App() {
  return (
    <Router>
      <ImmunaApp>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/alerts' element={<Alerts />} />
          <Route path='/defend' element={<Defend />} />
        </Routes>
      </ImmunaApp>
    </Router>
  );
}

export default App;
