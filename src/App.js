import './App.css';

import AsideDrawer from './component/UI/AsideDrawer.js'
import React from 'react';
import SimpleAppBar from './component/UI/SimpleAppBar.js'

function App() {
  return (
    <div className="App">
      <SimpleAppBar></SimpleAppBar>
      <AsideDrawer></AsideDrawer>
    </div>
  );
}

export default App;
