import React,{useState} from 'react'
import "../../styles/mobilesidemenu.css"
import {useSelector, useDispatch} from 'react-redux'
import {toggleMobileMenu, switchMobileView} from "../../store/slice"
import Trade from "../mobile/trade";
import {update, edit, changeChart, changeGroup, changeSearch} from "../../store/slice"
import DepositModal  from "../mobile/depositmodal"
import WithdrawalModal  from "../mobile/withdrawalmodal"
import ProfileModal  from "../mobile/profilemodal"
import Market from '../mobile/market'
import History from "../mobile/history";
import Transactionhistory from "../mobile/transactionhistory";
import Pendingposition from "../mobile/pendingposition";
import Openposition from "../mobile/openposition";
import { Link } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import EuroUsdIcon from "../../images/eurousd.png"
import { useHistory } from "react-router-dom";

function MobileSidebar(props) {
	const history = useHistory();
	 const [isLoggedIn, setIsLoggedIn] =useState(false);
    const {loginId,loginToken} =props;
    const logout =()=>{
        localStorage.clear();
				history.push('/login');
      //  loginId();
        //loginToken();
        //setIsLoggedIn(false);

      }
      /*useEffect(()=>{
          if(localStorage.getItem("access_token")!==null){
              setIsLoggedIn(true);
          }
          else{
              setIsLoggedIn(false);
          }
      },[]);*/
	 const [modalShow, setModalShow] = useState(false);
	 const [modalWithdrawShow, setWithdrawModalShow] = useState(false);
	  const [modalProfileShow, setProfileModalShow] = useState(false);
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
			<li ><Link to="/"><img src={EuroUsdIcon} className="menu-icon-mobile"/><span>Trade</span></Link></li>


			<li ><Link to="/open-position"><img src={EuroUsdIcon} className="menu-icon-mobile"/><span>Open Positions</span></Link></li>
			<li ><Link to="/history"><img src={EuroUsdIcon} className="menu-icon-mobile"/><span>History</span></Link></li>
			
			<li onClick={() => setProfileModalShow(true)}>

			<img src={EuroUsdIcon} className="menu-icon-mobile"/><span>Profile</span></li>
			
			<li onClick={() => setModalShow(true)}>


			<img src={EuroUsdIcon} className="menu-icon-mobile"/><span>Deposit</span></li>
			<li onClick={() => setWithdrawModalShow(true)}>

			<img src={EuroUsdIcon} className="menu-icon-mobile"/><span>Withdraw</span></li>
			<li onClick={()=>{logout()}}><span>Logout</span></li>


			</ul>
		</div>:""
	}


<DepositModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <WithdrawalModal
        show={modalWithdrawShow}
        onHide={() => setWithdrawModalShow(false)}
      />
      <ProfileModal
        show={modalProfileShow}
        onHide={() => setProfileModalShow(false)}
      />
	</>)
}

export default MobileSidebar
