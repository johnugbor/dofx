import React,{useState} from 'react';
import "../../styles/login.css";
import LocalStorageService from "../utilities/localStorageService";
import {Link, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {rootUrl} from "../utilities/constants";
import {useForm} from "react-hook-form";
import { loginEndpoint } from "../utilities/endpoints";
import {useAuth,useUuid} from "../context/authcontext";
import {Container,Image,Row, Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setAccessTokenUuid} from "../../store/slice";
const csrfToken = Cookies.get('csrftoken');
export default function Login(props){
  //const {setAuthTokens} = useAuth();
  //const {setUserUuid} = useUuid();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [switchPassView, setSwitchPassView] =useState(true);
  const [rememberMeChecked, setRememberMeChecked] =useState(true);
  	const dispatch = useDispatch()
   const togglePasswordField =()=>{
     setSwitchPassView(!switchPassView);
   }
 const handleRemeberCheckBoxChange =()=>{
    setRememberMeChecked(!rememberMeChecked);

 }
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const logUserIn = item => {
    setIsError(false);
    setIsLoading(true);

    axios.post(`${rootUrl}${loginEndpoint}`,item,).then(
      (resp)=>{
        if(resp.status === 200){
        dispatch(setAccessTokenUuid({
          "code_token":resp.data.token,
          "recovery_email":item.username,
          "token_identifier":item.password,
          "token":"",
          "uuid":""
 
        }));
    
      setLoggedIn(true);
      setIsLoading(false);
      }
      else{
        setIsError(true)
      }
      })
    .catch(error=>{setIsError(true);
      setIsLoading(false);});

  };



  if(isLoggedIn){
    return <Redirect push to = {{pathname:"/two-fa/"}} />;
  }
 else{
  return(

    <React.Fragment>

    <Container className="login-panel">


        <Row>
            <Col  className="login-panel-image "></Col>
            <Col  className="login-panel-right">
           <Row><h1>IGMC</h1></Row>
            <div className="login-form-title"><h3>LOG IN</h3></div>
    {isLoading&&<Image className="loadingspinner" src="/Iphone-spinner-2.gif"/>}



    <form onSubmit={handleSubmit(logUserIn)} className="auth-form">
  <div className ="form-row form-margin margin-bottom">
                <div className ="col password-field-container">
                    <input type ="email"  placeholder ="Email" name="username"

                    className ="form-control login-form-field-input"
                     {...register("username", {
                      required: " Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })

                   }

                     />
                     {errors.username && (<div className="input-error"></div>)}
                </div>
                </div>
                <div className ="form-row form-margin place-order-signup">
            <div className ="col password-field-container">
                <div >

                <input type ={switchPassView?"password":"text"} placeholder ="Password"
                    className ="form-control login-form-field-input-password" name ="password"

                    {...register('password',{
                      required: "Password  is required",})}/>

                       </div>


                     <div class="form-switch " title="" >
                     {errors.password && (<div className="password-input-error"></div>

                    )}
                <div class="form-switch-inner" onClick={()=>togglePasswordField()}> {switchPassView?
                      <svg viewBox="0 0 16.23 10.41"><path d="M8.51.39A7.18,7.18,0,0,1,9.89.53a9,9,0,0,1,2.6,1.05A13.57,13.57,0,0,1,16,4.49a7.28,7.28,0,0,1,.55.67.54.54,0,0,1,0,.67,12.17,12.17,0,0,1-1.76,1.9,10.78,10.78,0,0,1-4.63,2.69,6.71,6.71,0,0,1-1.59.19h0a6.54,6.54,0,0,1-1.57-.19A11,11,0,0,1,2.26,7.73,13.07,13.07,0,0,1,.53,5.85a.48.48,0,0,1,0-.67,3,3,0,0,1,.28-.37c.13-.16.2-.24.26-.33a14.45,14.45,0,0,1,3.48-2.9,8.84,8.84,0,0,1,2.6-1A7.36,7.36,0,0,1,8.51.39Zm0,.79a6.51,6.51,0,0,0-1.24.12,7.74,7.74,0,0,0-2.37,1A13.34,13.34,0,0,0,1.64,5c0,.07-.13.17-.28.34l-.13.17A12.63,12.63,0,0,0,2.78,7.14,10.24,10.24,0,0,0,7.09,9.66a6,6,0,0,0,1.39.16h0a6.22,6.22,0,0,0,1.41-.16,10.09,10.09,0,0,0,4.29-2.52,12.75,12.75,0,0,0,1.57-1.65L15.38,5a13,13,0,0,0-3.27-2.74,8,8,0,0,0-2.36-1A6.59,6.59,0,0,0,8.51,1.18ZM8.5,2A3.54,3.54,0,1,1,5,5.5,3.51,3.51,0,0,1,8.5,2Zm0,.79A2.75,2.75,0,1,0,11.2,5.5,2.73,2.73,0,0,0,8.5,2.75Z" transform="translate(-0.38 -0.29)"></path></svg>
                      :<svg viewBox="0 0 16.23 10.41"><path d="M8.51.39A7.18,7.18,0,0,1,9.89.53a9,9,0,0,1,2.6,1.05A13.57,13.57,0,0,1,16,4.49a7.28,7.28,0,0,1,.55.67.54.54,0,0,1,0,.67,12.17,12.17,0,0,1-1.76,1.9,10.78,10.78,0,0,1-4.63,2.69,6.71,6.71,0,0,1-1.59.19h0a6.54,6.54,0,0,1-1.57-.19A11,11,0,0,1,2.26,7.73,13.07,13.07,0,0,1,.53,5.85a.48.48,0,0,1,0-.67,3,3,0,0,1,.28-.37c.13-.16.2-.24.26-.33a14.45,14.45,0,0,1,3.48-2.9,8.84,8.84,0,0,1,2.6-1A7.36,7.36,0,0,1,8.51.39Zm0,.79a6.51,6.51,0,0,0-1.24.12,7.74,7.74,0,0,0-2.37,1A13.34,13.34,0,0,0,1.64,5c0,.07-.13.17-.28.34l-.13.17A12.63,12.63,0,0,0,2.78,7.14,10.24,10.24,0,0,0,7.09,9.66a6,6,0,0,0,1.39.16h0a6.22,6.22,0,0,0,1.41-.16,10.09,10.09,0,0,0,4.29-2.52,12.75,12.75,0,0,0,1.57-1.65L15.38,5a13,13,0,0,0-3.27-2.74,8,8,0,0,0-2.36-1A6.59,6.59,0,0,0,8.51,1.18ZM8.5,2A3.54,3.54,0,1,1,5,5.5,3.51,3.51,0,0,1,8.5,2Zm0,.79A2.75,2.75,0,1,0,11.2,5.5,2.73,2.73,0,0,0,8.5,2.75Z" transform="translate(-0.38 -0.29)"></path><path d="M1.23,10.7a.52.52,0,0,1-.42-.22A.51.51,0,0,1,1,9.78L15.51.37a.5.5,0,1,1,.54.84L1.5,10.62A.45.45,0,0,1,1.23,10.7Z" transform="translate(-0.38 -0.29)"></path></svg>}
                      </div></div>



            </div>

            </div>
            <div className="form-row login-link">
               <div >

               <Link to="/reset-password"  className="IGMC-link"><span>Forgot your password?</span></Link> </div>

            </div>
  <input type="submit"
          disabled = {isLoading}
          className="auth-button" value="Login"/>
   <span>{isError && <span className="error-message redingme">Email or  password is incorrect </span>}</span>
</form>

<div className ="form-row form-margin ">
                <div className ="checkbox-remember">
                <label className ="container-remember">
                    <span className="rem-text">Remember me next time</span>
                    <input type= "checkbox"
                    checked ={ rememberMeChecked}
                    onChange ={ handleRemeberCheckBoxChange }/>
                   <span className ="checkmark"></span>
                </label>
                </div>

            </div>
 <div className="login-footer"><span className="not-registered-yet">Not registered yet? <Link to="/signup"  className="IGMC-link">open account </Link></span> </div>
</Col>





</Row>
</Container>
 </React.Fragment>);
}
}
