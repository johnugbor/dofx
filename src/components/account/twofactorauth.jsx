import React,{useState} from 'react';
import "../../styles/login.css";
import LocalStorageService from "../utilities/localStorageService";
import {Link, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {rootUrl} from "../utilities/constants";
import {useForm} from "react-hook-form";
import { loginEndpoint,twofaEndpoint,loginAfterTwoFaEndpoint } from "../utilities/endpoints";
import {useAuth,useUuid} from "../context/authcontext";
import {Container,Image,Row, Col} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {setAccessTokenUuid} from "../../store/slice";
const csrfToken = Cookies.get('csrftoken');
export default function TwoFactorAuth (props){
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [switchPassView, setSwitchPassView] =useState(true);
  const [rememberMeChecked, setRememberMeChecked] =useState(true);
    const dispatch = useDispatch()
    const accessData = useSelector(state => state.access.access)

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

    axios.post(`${rootUrl}${twofaEndpoint}`,item,).then(
      (resp)=>{
        if(resp.status === 200){
          console.log("two fa verified")








axios.post(`${rootUrl}${loginAfterTwoFaEndpoint}`,{ "email":accessData.recovery_email,"password":accessData.token_identifier},).then(
      (resp)=>{
        if(resp.status === 200){




        dispatch(setAccessTokenUuid({
          "token":resp.data.access_token,
          "uuid":resp.data.user.id,
          "recovery_email":"",
          "token_identifier":"",
          "code_token":"",

        }));


      setToken(resp.data.access_token);
      setUuid(resp.data.user.id);
      setLoggedIn(true);
      setIsLoading(false);



      }


      else{
        setIsError(true)
      }

      
      })
    .catch(error=>{setIsError(true);
      setIsLoading(false);});
























      }


      else{
        setIsError(true)
      }


      })
    .catch(error=>{setIsError(true);
      setIsLoading(false);});

  };
  const setToken =(data)=>{
    localStorage.setItem("access_token", JSON.stringify(data));
    //this.setState({authTokens:token});
   }
   const setUuid =(data)=>{
     localStorage.setItem("account_owner",JSON.stringify(data));
     //this.setState({userUuid:id});
   }


  if(isLoggedIn){
    return <Redirect push to = {{pathname:"/"}} />;
  }
 else{
	return(
<Container className="login-panel">


        <Row>
            <Col  className="login-panel-image "></Col>
            <Col  className="login-panel-right">
            <Row><h1>IGMC</h1></Row>
<h2 className="reset-password forgot-password-title" >Two factor authentication</h2>
{isLoading&&<Image className="loadingspinner" src="/Iphone-spinner-2.gif"/>}
 {isError&&<div><p>Error occured, retry</p></div>}

  <form onSubmit={handleSubmit(logUserIn)} className="auth-form">
             <span className="whitingme">Code was sent to your email</span>
  
 <div className ="form-row form-margin margin-bottom">
  
  <div className ="col  password-field-container">
                 
                    <input type="hidden" name ="code_token" value={accessData.code_token}
                    className ="form-control login-form-field-input" 
                     {...register("code_token",
                      )}/>
                     

                </div>
 </div>

  <div className ="form-row form-margin margin-bottom">
               
                <div className ="col  password-field-container">
                 
                    <input type ="text" name ="code" placeholder ="Code" 
                    
                    className ="form-control login-form-field-input" 
                     {...register("code",{
                      required: " Code is required",
                      pattern: {
                        value: "\d[0-9]{7} ",
                        message: "invalid code"
                      }
                    })}/>
                     {errors.code && (<p style={{ color: "red" }}> {
                        errors.code.message}</p>)}
                </div>
                </div> 
                <input type="submit" disabled ={isLoading} className="auth-button" value="SIGN IN"/>
  </form>
  
   <div className="form-row login-link">
               <div >
               
               <Link to="/reset-password"  className="IGMC-link"><span>Forgot your password?</span></Link> </div>
 
            </div>
</Col>
</Row>
</Container>
);
}}