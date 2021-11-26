import React,{useState} from "react";
import { Link } from "react-router-dom";
import { forgotPasswordEndpoint } from "../utilities/endpoints";
import axios from "axios";
import {rootUrl} from "../utilities/constants";
import {useForm} from "react-hook-form";
import {Container,Image,Row, Col} from "react-bootstrap";

export default function ResetPassword (props){
 
  const { register, handleSubmit, formState: { errors },getValues } = useForm();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResetEmailSent, setResetEmailSent] = useState(false);

  const Reset =(item)=>{

    setIsLoading(true);
    axios.post(`${rootUrl}${forgotPasswordEndpoint}`,item,).then(
      (resp)=>{
        if(resp.status === 200){
          setResetEmailSent(true);
      }
      else{
        setIsError(true)
      }
      })
    .catch(error=>{setIsError(true);
      setIsLoading(false);});
  }
  if(isResetEmailSent){
    return(<Container>
      <span className="reset-email-sent">
        Check your email for password reset details </span>
        <Link to="/">IGMC Home  </Link>
    </Container>)
  }
  else{
	return(
<Container className="login-panel">


        <Row>
            <Col  className="login-panel-image "></Col>
            <Col  className="login-panel-right">
            <Row><h1>IGMC</h1></Row>
<h2 className="reset-password forgot-password-title" >Forgot password</h2>
{isLoading&&<Image className="loadingspinner" src="/Iphone-spinner-2.gif"/>}
 {isError&&<div><p style={{ color: "red" }}>Error occured, retry</p></div>}

  <form onSubmit={handleSubmit(Reset)} className="auth-form">
             <span className="whitingme">Please enter your email to continue</span>
  <div className ="form-row form-margin margin-bottom">

                <div className ="col  password-field-container">
                 
                    <input type ="email" name ="email" placeholder ="Email" 
                    
                    className ="form-control login-form-field-input" 
                     {...register("email",{
                      required: " Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })}/>
                     {errors.email && (<p style={{ color: "red" }}> {
                        errors.email.message}</p>)}
                </div>
                </div>
                <input type="submit" disabled ={isLoading} className="auth-button" value="Next"/>
  </form>
  
  <div> <Link to="/login"  className="IGMC-link"> Back to Login</Link></div>

</Col>
</Row>
</Container>
);
}}