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
		 




<Draggable
        axis="y"
        handle=".index-right-resizer"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        
        onDrag={handleDrag}>


		<div className="index-right-bottom" style={{height:deltaPosition}}>

		

      







		<div className="widgets-footer">
			<div className="tabs">





        
        <div className="dragzone">
          <button className="index-right-resizer"></button>
          
     
			<div className="tabs-control">
					<button className="tabs-control-item">
					<span>Open Positions</span>
					 <div className="table-count">(0)</div>
					 </button><button className="tabs-control-item tabs-control-item__active"><span>Pending Orders</span> 
					 <div className="table-count">(0)</div></button>
					 <button className="tabs-control-item">
					 <span>History</span> 
					 <div className="table-count">(0)</div>
					 </button><button className="tabs-control-item">
					 <span>Transactions history</span> 
					 <div className="table-count">(0)</div>
					 </button>

			 </div>

</div>
 


			 <div className="tabs-content">
					 <div className="tabs-content-item tabs-content-item__active">
						 <div className="wrap-orders">
							 <div className="table open-positions-table">
									 <div className="table-row table-row__head">
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Id</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col table-time filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Time</span></div>
										 <div className="filter-arrow filter-arrow__DESC"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Type</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Volume</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Symbol</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>SL</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>TP</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Price</span></div>
										 <div className="filter-arrow">
										 </div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Commission</span></div>
										 <div className="filter-arrow"></div>
										 </div>
										 </div>
										 <div className="table-col filter-col">
										 <div className="filter-col-inner">
										 <div className="filter-text"><span>Swaps</span></div>
										 <div className="filter-arrow">
										 </div>
										 </div>
										 </div>
										 <div className="table-col"><span>Current price</span></div>
									 </div>
								 <div>
									 <div className="checkbox "><label><input type="checkbox"/>
										 <div className="checkbox-inner">
										 <div className="checkbox-toggle">
										 </div>
										 </div>
									 </label>
									 </div>
									 <div className="close-all">
										 <button data-tip="true" 
									 		data-for="close-all-tip" 
									 		className="close-all-button" 
									 		disabled=""></button>
									 </div>
								 </div>
							 </div>
						 </div>
					 </div>
			 </div>

			 </div>
		 </div>

		
		</div>


</Draggable>














	</div>

</div>

	</>)
}
export {DesktopTradeView}