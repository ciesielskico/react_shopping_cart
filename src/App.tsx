import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PlanetList from './components/PlanetList';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={PlanetList} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
