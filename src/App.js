import React from 'react';
import Nav from './components/nav'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
    </>
  );
}

export default App;
