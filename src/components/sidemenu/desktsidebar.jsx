import React, {useState, useEffect}  from 'react'
import {Link} from 'react-router-dom'
import "../../styles/desktsidebar.css"
import {Image} from 'react-bootstrap'
import LanguageIcon from '../icons/change-language-icon.svg'
import ProfileAvarter from '../icons/profile-avarter.svg'
import OneClick from '../icons/one-click.svg'
import PriceAlert from '../icons/price-alert.svg'
import MarketNews from '../icons/market-news.svg'
import EconomicCalender from '../icons/economic-calender.svg'
import ActivityLog from '../icons/activity-log.svg'
import LightTheme from '../icons/light-theme.svg'
import TradingSignal from '../icons/trading-signal.svg'
import LogoutIcon from '../icons/logout.svg'
import {useSelector} from 'react-redux'
import LocalStorageService from "../utilities/localStorageService";
import { useHistory } from "react-router-dom";
function DesktSidebar(props){
 const history = useHistory();
	 const [isLoggedIn, setIsLoggedIn] =useState(false);
    const {loginId,loginToken} =props;
    const logout =()=>{
      localStorage.removeItem(`access_token`);
			localStorage.removeItem(`account_owner`);
			history.push('/login');
      }




	 const settings__opened = useSelector(state=>state.menu.settings_opened)

const [ language__opened, setLanguageState ] = useState(false);

  const toggleLanguageDropdown =()=>{
    setLanguageState (!language__opened);
  }
let {sidebarstate} = props;
return<>{settings__opened?
	<div className="settings-panel">
		<div className="settings-panel-inner">
			<div className="settings-account">
				<ul  className="settings-ul">

				<li>
					<i className="sidebar-icon">
					<Image src={ProfileAvarter} alt="change-language-icon"/>
				</i> <span>Profile</span></li>
				<li>
					<i className="sidebar-icon">
					<Image src={OneClick} alt="change-language-icon"/>
				</i> <span>Deposit</span></li>
				<li>
					<i className="sidebar-icon">
					<Image src={LightTheme} alt="change-language-icon"/>
				</i> <span>Withdraw</span></li>
				<li  onClick={()=>logout()}>
					<i className="sidebar-icon">
					<Image src={LogoutIcon} alt="change-language-icon"/>
				</i>
				<span>Logout</span>



				</li>

				</ul>


			</div>
		</div>
	</div>:""}
	</>
}
export {DesktSidebar};
