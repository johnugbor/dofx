import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DesktHeader from './components/header/desktheader'
import {DesktSidebar} from './components/sidemenu/desktsidebar'
import {DesktopTradeView} from './components/tradeview/deskttradeview'
import Mobile from './Mobile'
import MobileSidebar from './components/sidemenu/mobilesidebar'
import Market from './components/mobile/market'
import Trade from "./components/mobile/trade";
import History from "./components/mobile/history";
import Transactionhistory from "./components/mobile/transactionhistory";
import Pendingposition from "./components/mobile/pendingposition";
import Openposition from "./components/mobile/openposition";
import {Link, Switch,BrowserRouter as Router, Route} from 'react-router-dom';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideBarToggleState:false, 
      width: window.innerWidth
    }


}

  componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}
handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
}

  toggleSideBar=()=>{
    let {sideBarToggleState} =this.state;
    this.setState({sideBarToggleState:!sideBarToggleState});
  }


  render(){

const { width } = this.state;
  const isMobile = width <= 500;
 

  if (isMobile) {
    return (
      <>
      <Router>
         <Switch>
          <Route path="/" exact component={Trade}/> 
           <Route path="/market" component={Market}/>
           <Route path="/open-position" component={Openposition}/>
          <Route path="/pending-position" component={Pendingposition}/> 
          <Route path="/history" component={History}/>
          <Route path="/transaction-history" component={Transactionhistory}/>
          
          </Switch>
         </Router>
     
     
    </>
  );

     } 

     else {
    return (


    <>
      <DesktHeader toggleSettings ={this.toggleSideBar} sidebarstate={this.state.sideBarToggleState}/>
      <DesktSidebar sidebarstate={this.state.sideBarToggleState}/>
    
      <DesktopTradeView/>
    </>
    
 );
}
}}
  





