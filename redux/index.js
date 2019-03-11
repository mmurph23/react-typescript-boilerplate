import { Store, createStore, applyMiddleware, Dispatch, Action, AnyAction } from 'redux';
import thunk from "redux-thunk";
import { routerMiddleware } from 'connected-react-router';
import rootReducer, { ApplicationState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'


// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

/**
 * Create the store with dynamic reducers
 */
export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState>{
  const middlewares = [routerMiddleware(history), thunk];
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer(history),   
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

