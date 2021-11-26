
import React, {useState} from "react";
import {Link, Redirect } from "react-router-dom";
import axios from "axios";
import {rootUrl} from "../utilities/constants";
import {confirmEmailEndpoint} from "../utilities/endpoints";
import {useParams} from "react-router-dom"; 
import {useForm} from "react-hook-form";
import {Container,Image,Row, Col} from "react-bootstrap";





export default function VerifyEmail (props){
  const { register, handleSubmit, formState: { errors },getValues } = useForm(
  
    );
    
   
    const Verify =(item)=>{
      setIsError(false);
      setIsLoading(true);
            
      axios.post(`${rootUrl}${confirmEmailEndpoint}${key}/`,item,).then(
       resp=>{
         if(resp.status === 200){
           setConfirmed(true);
        
        }}
       )   
       .catch(error=>{
        setIsLoading(false);
         setIsError(true);
        });
       
     };
     const {key} = useParams();  
  const [isConfirmedEmail, setConfirmedEmail] = useState(false); 
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false); 

  if(isConfirmed){
    return <Redirect push to = {{pathname:"/login"}} />;
  }
 else{
  return(
    <Container className="login-panel">


        <Row>
            <Col  className="login-panel-image "></Col>
            <Col  className="login-panel-right">
            <Row><h1>IGMC</h1></Row>
            <div className="login-form-title"><h3>Confirm email </h3></div>
      {isLoading&&<Image className="loadingspinner" src="/Iphone-spinner-2.gif"/>}
 {isError&&<div><p className="whitingme">Error occured, retry</p></div>}
 
    {isConfirmed&&<div><span className="whitingme">Email confirmation was succesful</span></div>}
    

    <form onSubmit={handleSubmit(Verify)}>
    <input type="hidden" name ="key" value= {key}/>
   

    
    <input type="submit" disabled = {isLoading} className = "verifyemail-btn" value ="Click to confirm your email"/>
  </form>
  </Col>
  </Row>
  </Container>
);
}}