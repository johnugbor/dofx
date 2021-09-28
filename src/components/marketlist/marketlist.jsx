import "../../styles/marketlist.css"
import {Tooltip, OverlayTrigger} from 'react-bootstrap'
import {useState} from 'react'
import BuyButton from "./buybutton"
import SellButton from "./sellbutton"
import Lots,{RequiredMargin,PendingOrder} from "./lots"
import AssetBalaance from "./assetbalance"
import {update, edit, changeChart, changeGroup, changeSearch} from "../../store/slice"
import {useSelector, useDispatch} from 'react-redux'
import BuyModal  from "./buymodal"
import AssetInfoModal from "./assetinfo";
function MarketList(props){
	var LeftToggle =props.LeftToggleProps;
	const [ favouriteStar, setFavouriteStar ] = useState(false);
	const [searchExist, setSearchExist] = useState(false);

	const toggleStar = ()=>{
    setFavouriteStar(!favouriteStar);
  }

const [ trade, setTrade ] = useState(false);

	const toggleTradeButton = ()=>{
    setTrade(!trade);
  }
  const marketData = useSelector(state=>state.asset.asset)
  const groupData = useSelector(state=>state.group.group)
  const searchData = useSelector(state=>state.search.search)

  const dispatch = useDispatch()
  
  const onGroupSelectChange = (e) =>{
  	const {value} = e.target;
  	dispatch(changeGroup(value));

  }
  const searchWord=(SearchedString, StringToSearch)=>{
  	let refinedSearchedString = SearchedString.toLowerCase();
  	let refinedStringToSearch = StringToSearch.toLowerCase();
  	let startIndex=0;
  	let resultIndex=-1;
  	resultIndex = refinedSearchedString.indexOf(refinedStringToSearch, startIndex);
  	return resultIndex;
  }
  
  const onSearchInputChange = (e) =>{
  	
  	let {value} = e.target;
  	dispatch(changeSearch(value));
  	

  }
  

   const [modalShow, setModalShow] = useState(false);
   const [assetInfoModalShow,setAssetInfoModalShow] = useState(false);
return(<>

		<div className={`market ${LeftToggle?"market__mini":""}`}>






				<div className="stochsearch-header">


					<div className="all-stock-sarch ">
						<input type="text" name="stochsearch" className="stocksearch-input" placeholder="Search" value={searchData} onChange={(e)=>onSearchInputChange(e)}/>
					</div>
					<div className="group-stock-search">
						<select name="trade-group-select" className="group-select" onChange ={(e)=>onGroupSelectChange(e)} disabled={searchData.length>0?true:false} >
						<option className="trade-list-option" value="Most Popular">Most Popular</option>
						<option className="trade-list-option" value="Top Movers">Top Movers</option>
						<option className="trade-list-option" value="All">All</option>
						<option className="trade-list-option" value="Forex">Forex</option>
						<option className="trade-list-option" value="Stocks">Stocks</option>
						<option className="trade-list-option" value="Commodities">Commodities</option>
						<option className="trade-list-option" value="Indices">Indices</option>
						<option className="trade-list-option" value="Cryptocurrencies">Cryptocurrencies</option>
						<option className="trade-list-option" value="ETF">ETF</option>
							
						</select>
					</div>

				</div>
		
	
<div className="market-table">

	<table>
		<thead>
			<tr>
				<th><span>Asset</span></th>
				<th colspan="1"><span>Last Price </span></th>
				<th colspan="3"><span>Change</span></th>
				
			
			</tr>
		</thead>
		<tbody>
		{marketData.map((index)=>(
		 (
		 	(searchWord(index.data.clearName,searchData)>0)|| 
		 	( 
		 		(searchData.length>0?!true:!false)
		 		&&(groupData=== index.data.group||groupData==="All")
		 	)
		 	)&&<tr class="asset ">
				<td>
					<div class="asset-info">
					  
					<img class="asset-icon" src="/media/15a0bd3235c2282bd533b07bc1b504f0.png"/>
							<div class="asset-info-name">{index.symbol}</div>
							</div>
				</td>
				
				<td><span title="1.18138" class="asset-stat ">${index.data.priceOpen}</span></td>
				<td><span title="0" class="asset-stat asset-mover asset-stat__red">{index.data.percentage} %</span></td>
				<td>
					<div class="asset-buttons">

					{trade?
						<button class="asset-open">
							<span onClick={()=>toggleTradeButton()}>Close</span>
						</button>
						:<button class="asset-open" onClick={() => {setModalShow(true);
									dispatch(edit(index.data));}

							}>
							Trade
						</button>}
						<div>
						  <OverlayTrigger
						      key={"placement"}
						      placement="bottom"
						      overlay={
						        <Tooltip id={`tooltip-`}>
						          Add chart
						        </Tooltip> }>
									<button type="button" class="asset-button asset-button__first" data-toggle="tooltip" data-placement="bottom" title="Add chart" 
										onClick={()=>dispatch(edit(index.data))}>
			 							<svg viewBox="0 0 31.49 31.49">
											<path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z">
											</path>
										</svg>
										</button>
							</OverlayTrigger>


					  <OverlayTrigger
					      key={"placement"}
					      placement="bottom"
					      overlay={
					        <Tooltip id={`tooltip-`}>
					          Asset info
					        </Tooltip>
					      }>
					
							<button type="button" class="asset-button  asset-button__last" data-toggle="tooltip" data-placement="bottom" title="Asset info" onClick={() => {
							setAssetInfoModalShow(true);
								/*dispatch(edit(index.data));*/}

							}>
 							<svg viewBox="0 0 330 330">
								<path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z">
								</path>
								<path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z">
								</path>
							</svg>
							</button>
							</OverlayTrigger>
						</div>
					</div>
				</td>
			</tr>
))}



{trade?<tr class="panel" >
<td colspan="100%">
<div class="chart-sell-buy chart-sell-buy__full">


<div class="asset-balance">
<AssetBalaance/>
</div>



<div class="chart-sell-buy-fields">
<Lots/>

<RequiredMargin/>
<PendingOrder/>
</div>




<div class="chart-sell-buy-buttons">
<BuyButton/>
<SellButton/>
</div>



</div>
</td>
</tr>:""}



<BuyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

<AssetInfoModal
	show={assetInfoModalShow}
        onHide={() => setAssetInfoModalShow(false)}
/>





		</tbody>
	</table>







</div>


		</div>

</>

)
	
}

export default MarketList;