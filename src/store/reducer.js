import * as types from './type';


const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    token: ''
}

export const reducer = (state=initialState, {type, payload}) => {
  // console.log(type)
    switch(type){
      case "login/getLogin/success":{
        // console.log(state.isAuth)
        return {...state,isAuth:true}
      }
      case "login/getLogin/logout":{
        return {...state,isAuth:false}
      }
      default:{return state}
    }
};