import { Component,useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DesktHeader from './components/header/desktheader'
import { DesktSidebar } from './components/sidemenu/desktsidebar'
import { DesktopTradeView } from './components/tradeview/deskttradeview'
import Mobile from './Mobile'
import MobileSidebar from './components/sidemenu/mobilesidebar'
import Market from './components/mobile/market'
import Trade from "./components/mobile/trade";
import History from "./components/mobile/history";
import Transactionhistory from "./components/mobile/transactionhistory";
import Pendingposition from "./components/mobile/pendingposition";
import Openposition from "./components/mobile/openposition";
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/account/loginform";
import Signup from "./components/account/signupform";
import TwoFactorAuth from "./components/account/twofactorauth"
import ResetPassword from "./components/account/forgotpassword";
import ConfirmResetPassword from "./components/account/confirmresetpassword";
import VerifyEmail from './components/account/verifyemail';
import { AuthContext,UuidContext } from "./components/context/authcontext";
import { connect } from "react-redux";
import {setAccessTokenUuid} from "./store/slice";
import ProtectedRoute from "./protectedroute";
import NewDesktop from "./newdesktop";
import {useDispatch,useSelector} from "react-redux";
function App(props) {
  const dispatch = useDispatch()
  const [width, setWidth] = useState( window.innerWidth );
  const [sideBarToggleState, setSideBarToggleState] =useState(false);
  const  getTokenAndgetUserUuid=()=>{
    if(localStorage.getItem("access_token")&&localStorage.getItem("account_owner")){
      const token =JSON.parse(localStorage.getItem("access_token"));
      const id =JSON.parse(localStorage.getItem("account_owner"));
      dispatch(setAccessTokenUuid({
       "token":token,
       "uuid":id,
       "recovery_email":"",
       "token_identifier":"",
       "code_token":"",

     }))
  return true;
     };


      }
  useEffect(() => {
    window.addEventListener('mousemove', () => {});
        window.addEventListener('resize', handleWindowSizeChange());

    // returned function will be called on component unmount
    return () => {
      window.addEventListener('resize', handleWindowSizeChange());
    }
  }, [])




  const handleWindowSizeChange = () => {
  setWidth(window.innerWidth);
  }
  // componentDidMount(){
  //       this.getTokenAndgetUserUuid();
  // }



const   setToken =(data)=>{
    localStorage.setItem("access_token", JSON.stringify(data));
    //this.setState({authTokens:token});
   }
const    setUuid =(data)=>{
     localStorage.setItem("account_owner",JSON.stringify(data));
     //this.setState({userUuid:id});
   }

  


    const isMobile = width <= 500;


    if (isMobile) {
      return (
        <div className="scrollbar-hidden">
          <Router>
            <Switch >

              <Route  exact path="/" exact component={Trade} />
              <Route exact  path="/market" component={Market} />
              <Route  exact path="/open-position" component={Openposition} />
              <Route  exact path="/pending-position" component={Pendingposition} />
              <Route  exact path="/history" component={History} />
              <Route  exact path="/transaction-history" component={Transactionhistory} />
               <Route exact path="/login/" component={Login}/>
               <Route exact path="/two-fa/" component={TwoFactorAuth}/>
               <Route exact path="/signup/" component={Signup}/>

      <Route exact  path="/reset-password/" component={ResetPassword}/>
      <Route exact path="/password-reset/confirm/:uid/:token/" component={ConfirmResetPassword}/>
      <Route exact path="/account/account-confirm-email/:key/" component={VerifyEmail}/>
            </Switch>

          </Router>


        </div>
      );

    }

    else {
      return (


        <><Router>
        <Switch>
        <Route exact path="/" component={NewDesktop}/>

        
        <Route exact path="/login/" component={Login}/>
        <Route exact path="/two-fa/" component={TwoFactorAuth}/>

      <Route exact path="/signup/" component={Signup}/>

      <Route exact  path="/reset-password/" component={ResetPassword}/>
      <Route exact path="/password-reset/confirm/:uid/:token/" component={ConfirmResetPassword}/>
      <Route exact path="/account/account-confirm-email/:key/" component={VerifyEmail}/>

          </Switch>
          </Router>
        </>

      );
    }
  }

export default App;
