import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './app/store/store';

import App from './app/App';
import ErrorBoundary from './app/containers/ErrorBoundary';

const Main = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
