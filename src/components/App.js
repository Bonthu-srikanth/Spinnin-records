import React from 'react';
import SearchBar from './searchbar';
import Details from './details';
import Favorites from './favorites';
import Nav from './navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
const App = () => {
  return (
    <Router> 
    <div className="App">
<Nav />
<Switch>

<Route path="/searcbar" component={SearchBar}/>
<Route path="/details" component= {Details}/>
<Route path="/favorites" component={Favorites}/>

</Switch>
    </div>
    </Router>  

   
  );
};

export default App;
