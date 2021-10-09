import React,{useState} from 'react'
import "../../styles/mobilesidemenu.css"
import {useSelector, useDispatch} from 'react-redux'
import {toggleMobileMenu, switchMobileView} from "../../store/slice" 
import Trade from "../mobile/trade";
import {update, edit, changeChart, changeGroup, changeSearch} from "../../store/slice"
import DepositModal  from "../mobile/depositmodal"
import Market from '../mobile/market'
import History from "../mobile/history";
import Transactionhistory from "../mobile/transactionhistory";
import Pendingposition from "../mobile/pendingposition";
import Openposition from "../mobile/openposition";
import { Link } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import { GrClose } from "react-icons/gr";


function MobileSidebar() {
	 const [modalShow, setModalShow] = useState(false);
	const [listNumber, setListNumber] = useState(0);
	const dispatch = useDispatch()
	const menuStatus = useSelector(state=>state.mobilemenu.mobilemenu.status)
    const selectedMenu = useSelector(state=>state.mobilemenu.mobilemenu.currentView)
	
	const switchViewAndClose =()=>{
		
		dispatch(toggleMobileMenu({status:!menuStatus}));
		

	} 


	return (<>
		{menuStatus?
		<div>
			<ul className="navigation-list" onClick={()=>switchViewAndClose()}>
			<li ><Link to="/">Trade</Link></li>
			<li ><Link to="/market">Market</Link></li>
			<li ><Link to="/open-position">Open Positions</Link></li>
			<li ><Link to="/pending-position"> Pending Positions </Link></li>
			<li ><Link to="/history">History</Link></li>
			<li ><Link to="/transaction-history">Transactions history</Link></li>
			<li onClick={() => setModalShow(true)}>Deposit</li>
			<li>Logout</li>
			

			</ul>
		</div>:""
	}

		     
<DepositModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
	</>)
}

export default MobileSidebar