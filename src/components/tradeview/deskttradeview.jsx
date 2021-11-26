import {useState} from 'react';
import ResizePanel from "react-resize-panel";
import "../../styles/deskttoptradeview.css" 
import Draggable from 'react-draggable';
import MarketList from '../marketlist/marketlist';
import Desktopgraph from "../graph/desktopgraph";
function DesktopTradeView(){
	const [LeftToggle,setLeftToggle ] =useState(false);
  const indexLeftToggle =()=>{
  	setLeftToggle(!LeftToggle);}

  	const [deltaPosition, setDeltaPosition]=useState(247);
    const [activeTab, setActiveTab] = useState(true)

    const setOpenPositionActive = () =>{
    	if(activeTab){
    		setActiveTab(false)
    	}
    }
    const setHistoryActive = () =>{
    	if(!activeTab){
    		setActiveTab(true)
    	}
    }

  const handleDrag = (e, ui) => {

    setDeltaPosition(
      deltaPosition+ui.deltaY
      
    );
  };


	return(
	<>
<div className="index">

	<div className={`index-left ${LeftToggle?"index-left__mini":""}`}>
		<div className="index-left-component">
		

        < MarketList LeftToggleProps={LeftToggle}/>



	
		</div>
		<button className="index-left-toggle" onClick={()=>indexLeftToggle()}></button>
	</div>
		

	<div className="index-right" >
		<div className="index-right-top" style={{height:450}}>
			<div className={`charts ${"charts__0"} ${"charts__grid"}`}>
			<Desktopgraph/>
			
			
				<div className="switch-grid">
					<div className="switch-grid__btn">
						<i className="fa fa-th-large" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		</div>
		 







		<div className="index-right-bottom" style={{height:deltaPosition}}>

		

      







		<div className="widgets-footer">
			<div className="tabs">





        
        <div className="dragzone">
         
          
     
			<div className="tabs-control">
					<button className={`tabs-control-item ${activeTab?"":"tabs-control-item__active"}`} onClick={()=>setOpenPositionActive()}>
					<span>Open Positions</span>
					 <div className="table-count">(0)</div>
					 </button>

					 <button className={`tabs-control-item ${activeTab?"tabs-control-item__active":""}`} onClick={()=>setHistoryActive()}>
					 <span>History</span> 
					 <div className="table-count">(0)</div>
					 </button>

					

			 </div>

			 {activeTab?
			 <><div className ="desk-openposition-header">
			{/*History header*/}
			 		<span>Symbol</span>
			 		<span>Ticket</span>
			 		<span>Time</span>
			 		<span>Type</span>
			 		<span>Volume</span>
			 		
			 		<span>S/L</span>
			 		<span>T/P</span>
			 		<span>Price</span>
			 	
			 		<span>Swaps</span>
			 
			 		<span>Profits</span>
			 </div>
			 <div className="tabs-content">
			 {/*History data*/}

			 <div className="mobile-table-row asset" >
						
						<div className="mobile-table-col">
						<span className="mobile-asset-value">gbpusd</span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
							<span className="mobile-asset-value">2136547211</span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">2021.10.10 20:59:32 </span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">buy</span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.01</span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38280 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38282  </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.00 </span>
						</div>

						</div>



 <div className="mobile-table-row asset" >
						
						<div className="mobile-table-col">
						<span className="mobile-asset-value">gbpusd</span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
							<span className="mobile-asset-value">2136547211</span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">2021.10.10 20:59:32 </span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">buy</span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.01</span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38280 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38282  </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.00 </span>
						</div>

						</div>




						 







					</div></>

      :
			 <><div className ="desk-history-header">
			  {/*Open Positions header*/}
			 		<span>Order id</span>
			 		
			 		<span>Type</span>
			 		<span>Open time</span>
			 		<span>Close time</span>
			 		<span>Volume</span>
			 		<span>Symbol</span>
			 	
			 		<span>Open price</span>
			 		<span>Close price</span>
			 			<span>SL</span>
			 		<span>TP</span>
			 			<span>Swaps</span>
			 		
			 		<span>Profits</span>
			 </div>
	 <div className="tabs-content">
			 {/*Open Positions data*/}
   
						 <div className="mobile-table-row asset" >
						
						<div className="mobile-table-col withstyle1-mobile" >
							<span className="mobile-asset-value">2136547211</span>
						</div>

							<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">buy</span>
						</div>
						

					
							<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">2021.10.10 20:59:32 </span>
						</div>
						

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">2021.10.10 20:59:32 </span>
						</div>

						
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.01</span>
						</div>

						<div className="mobile-table-col">
						<span className="mobile-asset-value">2gbpusd</span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38280 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.00 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38282  </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.00 </span>
						</div>

						</div> 
						 
						 


						  <div className="mobile-table-row asset" >
						
						<div className="mobile-table-col withstyle1-mobile" >
							<span className="mobile-asset-value">2136547211</span>
						</div>

							<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">buy</span>
						</div>
						

					
							<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">2021.10.10 20:59:32 </span>
						</div>
						

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">2021.10.10 20:59:32 </span>
						</div>

						
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.01</span>
						</div>

						<div className="mobile-table-col">
						<span className="mobile-asset-value">2gbpusd</span>
						</div>

						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38280 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.000000 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.00 </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">1.38282  </span>
						</div>
						<div className="mobile-table-col withstyle1-mobile" >
						<span className="mobile-asset-value">0.00 </span>
						</div>

						</div> 
						 
						 
					</div>
			</>}

</div>
 




			 </div>
		 </div>

		
		</div>

















	</div>

</div>

	</>)
}
export {DesktopTradeView}