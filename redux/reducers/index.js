import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import userReducer, { UserState }  from './user';

// root app state
export interface ApplicationState {
    user: UserState,
    router: RouterState
}

const rootReducer = (history: History) => combineReducers<ApplicationState>({
    user: userReducer,
    router: connectRouter(history)
});

export default rootReducer;