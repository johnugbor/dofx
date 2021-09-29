import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DesktHeader from './components/header/desktheader'
import {DesktSidebar} from './components/sidemenu/desktsidebar'
import {DesktopTradeView} from './components/tradeview/deskttradeview'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {sideBarToggleState:false}
  }

  toggleSideBar=()=>{
    let {sideBarToggleState} =this.state;
    this.setState({sideBarToggleState:!sideBarToggleState});
  }


  render(){

  return (
    <>
      <DesktHeader toggleSettings ={this.toggleSideBar} sidebarstate={this.state.sideBarToggleState}/>
      <DesktSidebar sidebarstate={this.state.sideBarToggleState}/>
    }
      <DesktopTradeView/>
    </>
  );
}
}

export default App;
