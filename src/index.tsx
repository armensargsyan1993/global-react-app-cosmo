import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.scss';
import App from './App';
import { HashRouter ,BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk
    )
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//process.env.PUBLIC_URL