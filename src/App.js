import React from 'react';
import "../src/Main.css"

import { Page1 } from './components/Page1';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import { Page2 } from './components/Page2';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route  path='/Page2' element={ <Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
