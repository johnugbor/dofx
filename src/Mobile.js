import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MobileSidebar from './components/sidemenu/mobilesidebar'
import Market from './components/mobile/market'
import Trade from "./components/mobile/trade";
import History from "./components/mobile/history";
import Transactionhistory from "./components/mobile/transactionhistory";
import Pendingposition from "./components/mobile/pendingposition";
import Openposition from "./components/mobile/openposition";
import {Link, Switch, Router, Route} from 'react-router-dom';
function Mobile(){
	 let selectedMenu = useSelector(state=>state.mobilemenu.mobilemenu.currentView)
		return (<>
			 
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
		)
	
}

export default Mobile