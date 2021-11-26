import {useEffect,useState } from 'react';
import DesktHeader from './components/header/desktheader'
import { DesktSidebar } from './components/sidemenu/desktsidebar'
import { DesktopTradeView } from './components/tradeview/deskttradeview'

const NewDesktop =(props)=>{
    const [sideBarToggleState, setSideBarToggleState] =useState(false);
    const toggleSideBar = () => {

    setSideBarToggleState(true);
    }
  return(
    <><DesktHeader toggleSettings={toggleSideBar} sidebarstate={sideBarToggleState} />
    <DesktSidebar sidebarstate={sideBarToggleState} />

    <DesktopTradeView />
  </>)
}
export default NewDesktop;
