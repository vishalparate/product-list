import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import productReducer from './redux/reducers';
import DashBoard from './components/DashBoard';

const store = createStore(productReducer);

const App = () => {

  return (
    <Provider store={store}>
     <DashBoard/>
    </Provider>
  );
};

export default App;

