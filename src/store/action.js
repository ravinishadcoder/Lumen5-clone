import axios from "axios";
import * as type from "./type";

export const loginAPI = ()  => {
  return {type: type.LOGIN_SUCCESS}
   
};

export const logOutAPI=()=>{
  return {type:type.LOGIN_LOGOUT}
}