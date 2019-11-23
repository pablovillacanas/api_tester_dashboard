import './App.css';

import React, { useState } from 'react';

import AsideDrawer from './component/UI/AsideDrawer.js'
import ObjectCombinator from './container/ObjectCombinator.js'
import SimpleAppBar from './component/UI/SimpleAppBar.js'

const App = () => {

  const [asideDrawerVisible, setAsideDrawerVisible] = useState(true)

  const toggleDrawer = () => setAsideDrawerVisible(!asideDrawerVisible)

  return (
    <div className="App">
      <SimpleAppBar toggleDrawer={toggleDrawer}></SimpleAppBar>
      <AsideDrawer toggleDrawer={toggleDrawer} visible={asideDrawerVisible}></AsideDrawer>
      <ObjectCombinator></ObjectCombinator>
    </div>
  );
}

export default App;
