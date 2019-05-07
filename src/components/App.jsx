import React from 'react';
import Header from './Header';
import SearchPage from './SearchPage';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;