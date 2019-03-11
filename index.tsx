import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import createStore from './redux';
import { ApplicationState } from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const initialState: ApplicationState = {
  user: {
    name: '', 
    age: 0, 
    hometown: '', 
    favorite: ''
  },
  router: {
    location: history.location,
    action: 'PUSH'
  }
};


const store = createStore(history, initialState)


ReactDOM.render(
  <Provider store={store}>
      <App history={history}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
