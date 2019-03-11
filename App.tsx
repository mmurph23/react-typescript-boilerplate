import * as React from 'react';
import './App.css';
import routes from './Routes'
import {History} from 'history'
import { ConnectedRouter } from 'connected-react-router';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
}

export default App;
