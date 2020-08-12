import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import PlanetList from './components/PlanetList';
import { persistor, store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={PlanetList} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
