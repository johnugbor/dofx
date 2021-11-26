
import React, {useState} from "react";
import {Link, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {rootUrl} from "../utilities/constants";
import {useForm} from "react-hook-form";
import { signUpEndpoint } from "../utilities/endpoints";
import {Container,Image,Row, Col} from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const csrfToken = Cookies.get('csrftoken');

 


export default function SignUp (props){
  const { register, handleSubmit, formState: { errors },getValues } = useForm(
  
    );
  const [phonenumber,setPhonenumber] =useState("");
    const RegisterUser =(item)=>{
            setIsLoading(true);
            setIsError(false);
      axios.post(`${rootUrl}${signUpEndpoint}`,item,).then(
       resp=>{
         if(resp.status === 201){
          setIsLoading(false);
          setRegistered(true);
          

         }
        }
     
       )   
       .catch(error=>{
         setIsError(true);
         setIsLoading(false);
      });
       return;
     };
  const [isRegistered, setRegistered] = useState(false); 
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if(isRegistered){
    return <Redirect push to = {{pathname:"/login"}} />;
  }
 else{
  return(
<React.Fragment>


 <Container className="login-panel">


        <Row>
            <Col  className="login-panel-image "></Col>
            <Col  className="login-panel-right">
            <Row><h1>IGMC</h1></Row>
            <div className="login-form-title"><h3>Register</h3></div>
{isLoading&&<Image className="loadingspinner" src="/Iphone-spinner-2.gif"/>}
 {isError&&<div><p style={{ color: "red" }}>Error occured, retry</p></div>}
    <form onSubmit={handleSubmit(RegisterUser)} className="auth-form">
    

<div className ="form-row form-margin margin-bottom">
                <div className ="col password-field-container">
                    <input type ="text" name ="fullname" placeholder ="Name & surname" 
                    
                    className ="form-control  login-form-field-input" 
                     {...register("fullname",{
                      required: " Full name is required",
                      pattern: {
                        value: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
                        message: "Full name is required"
                      }
                    })}/>
                     {errors.fullname && (<p style={{ color: "red" }}> {
                        errors.fullname.message}</p>)}
                </div>
                </div>






    <div className ="form-row form-margin margin-bottom">
                <div className ="col password-field-container">
                    <input type ="email" name ="email" placeholder ="Email" 
                    
                    className ="form-control login-form-field-input" 
                     {...register("email",{
                      required: " Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })}/>
                     {errors.email && (<div className="input-error"></div>)}
                </div>
                </div>

    <div className ="form-row form-margin place-order-signup">
            <div className ="col password-field-container">
                <input type ="password" placeholder ="Create Password" 
                    className ="form-control login-form-field-input" name ="password1" 
                 
                    {...register("password1",{
                      required: "Password  is required",})}/>
                     {errors.password1 && (<div className="input-error"></div>)}
                    
            </div>
            
        </div>
    <div className ="form-row form-margin place-order-signup">
            <div className ="col password-field-container">
                   <input type ="password" name ="password2" 
                           placeholder ="Confirm Password" className ="form-control login-form-field-input" 
                          
                            {...register("password2",{
                            required: "Password confirmation is required",
                            validate: {
                            matchesPreviousPassword: (value) => {
                           const { password1 } = getValues();
                           return password1 === value || 'Passwords should match!';
                    },},})}/>
                                
                {errors.password2 && (
                  <p style={{ color: "red" }}>{errors.password2.message}</p>
                 )}
            </div></div>
<div className ="form-row form-margin place-order-signup">
            <div className ="col password-field-container"><PhoneInput
      placeholder="Enter phone number"
      value={phonenumber}
      onChange={setPhonenumber}
      className ="form-control login-form-field-input" 
        {...register("phonenumber",{
                      required: "Phone number is required",})}
                                        /> 
{errors.phonenumber && (
                  <p style={{ color: "red" }}>{errors.phonenumber.message}</p>
                 )}
                                        </div></div>
<div className ="form-row form-margin place-order-signup">
            <div className ="col">
            <div className="">
                    <select  id="main-select" className="group-select" onChange={""}
                   {...register("currency",{
                      required: "Currency  is required",})}
                   >
                                        <option value="">Currency</option>
                                       <option  value="C$">CAD (C$)</option>
                                       <option  value="$">USD ($)</option>
                                       <option  value="A$">AUD (A$)</option>
                                       <option value="£">GBP (£)</option>
                                       <option name="currency" value="€">EUR (€)</option>
                                       <option  value="CHF">CHF (CHF)</option>
                    </select>
                    {errors.currency && (
                  <p style={{ color: "red" }}>{errors.currency.message}</p>
                 )}
                </div>
                 </div>
                  </div>
    <input type="submit"  value ="Register" className="auth-button"/>
  
  </form>
  <div><span className="already-registered">Already registered?</span><Link to="/login" className="startdo-link">Login</Link></div>
  </Col>
  </Row>
  </Container>

  </React.Fragment>);
}}