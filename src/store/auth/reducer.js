import * as types from './type';


const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    token: ''
}

export const authReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case types.LOGIN_LOADING: {
          return {
            ...state
          };
        }
        default:
            return state;
    }
};