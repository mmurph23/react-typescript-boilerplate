// constants and types

const UPDATE_USER = 'UPDATE_USER';

// initial state
const initialState = {
  name: '', 
  age: 0, 
  hometown: '', 
  favorite: ''
}

//action creators

export const updateUser = (userInfo) => ({
    type: UPDATE_USER,
    payload: userInfo
});

// reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return { ...state, ...action.payload };
    }
    return state;
  }

export default userReducer;

