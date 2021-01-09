import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import { ConnectedRouter } from 'connected-react-router';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const initialState = {};
// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const history = createBrowserHistory();
const rootElement = document.getElementById('root');
const store = configureStore(initialState, history);
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </ConnectedRouter>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
