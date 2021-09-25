import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {update, edit,increaselots, decreaselots, changeChart} from "../../store/slice"

function BuySellAmountField(props) {
	 const orderDetails = useSelector(state=>state.order.asset);
   	 const dispatch = useDispatch();
	return (
		<div>
			<div class="chart-sell-buy-field-input">
		<div class="field field__with-steps field__disabled">
		<button class="field-dec" onClick={()=>dispatch(decreaselots())}></button>
		<div class="field-value">
		<input type="text" disabled="" value={orderDetails.priceOpen}/>
		</div><button class="field-inc" onClick={()=>dispatch(increaselots())}></button>
		</div>
		</div>

		</div>
	)
}

export default BuySellAmountField;