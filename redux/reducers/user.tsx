import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

// constants and types

const UPDATE_USER = 'UPDATE_USER';
type UPDATE_USER = typeof UPDATE_USER;

// interfaces

export interface UserState {
    name: string,
    age: number,
    hometown: string,
    favorite: string
}

const initialState: UserState = {
  name: '', 
  age: 0, 
  hometown: '', 
  favorite: ''
}


//action creators

export const updateUser = (payload: string | number) => action(UPDATE_USER,payload);

// reducer
const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return { ...state, ...action.payload };
    }
    return state;
  }

export default userReducer;

