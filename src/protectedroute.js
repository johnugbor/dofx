import React,{useEffect}  from "react";
import { Redirect, Route } from "react-router-dom";
import LocalStorageService from "./components/utilities/localStorageService";
import {useDispatch,useSelector} from "react-redux";
import {setAccessTokenUuid} from "./store/slice";
function ProtectedRoute({ component: Component, ...rest }) {
 const dispatch = useDispatch();
 const selectTokenandUuid = useSelector(state=>state.access.access)
  const getTokenAndgetUserUuid=()=>{
    if(localStorage.getItem("access_token")&&localStorage.getItem("account_owner")){
      const token =JSON.parse(localStorage.getItem("access_token"));
      const id =JSON.parse(localStorage.getItem("account_owner"));
     dispatch(setAccessTokenUuid({
       "token":token,
       "uuid":id

     }));

     return true;  }
    }

 useEffect(
   ()=>{
     getTokenAndgetUserUuid()
   },
   [])
    const getTokenState=()=>{
      if(selectTokenandUuid.token!==""&&selectTokenandUuid.uuid!==""){
        return true;
      }
      else{
        return false;
      }

    }
  return (
    <Route
      {...rest}
      render={(props) =>
      localStorage.getItem("access_token")? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: {  referer: props.location } }}/>
      }
    />
  );
}

export default ProtectedRoute;
