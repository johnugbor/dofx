import { createSlice } from '@reduxjs/toolkit'
import {combineReducers} from "redux"

export const assetSlice = createSlice({ 
 name: 'asset',  
 initialState: {    
  asset:[

  
  	{ symbol:'EURUSDecn',
  	data:{
  	"bid":1.18136,
	"ask":1.18138,
	"spread_diff":0,
	"symbol":"ONDA:EURUSD",
	"digits":5,
	"currency":"EUR",
	"description":"Euro vs US Dollar",
	"contract_size":100000,
	"percentage":0.909,
	"instrument":0,
	"volumeMin":1,
	"volumeMax":3000,
	"volumeStep":1,
	"tick_size":0,
	"tick_value":0,
	"margin_initial":0,
	"mode":0,
	"profit_mode":0,
	"group":"Forex",
	"marketState":0,
	"stops_level":0,
	"lotCurrency":"EUR",
	"displayName":"EURUSD",
	"clearName":"EURUSD",
	"priceOpen":1.637,
	"popular":true,
	"mover":0
     }
 }, 

{ symbol:'EURNOK',
  	data:{
  	"bid":1.18136,
	"ask":1.18138,
	"spread_diff":0,
	"symbol":"IDC:EURNOK",
	"digits":5,
	"currency":"EUR",
	"description":"Euro vs US Dollar",
	"contract_size":100000,
	"percentage":0.909,
	"instrument":0,
	"volumeMin":1,
	"volumeMax":3000,
	"volumeStep":1,
	"tick_size":0,
	"tick_value":0,
	"margin_initial":0,
	"mode":0,
	"profit_mode":0,
	"group":"Forex",
	"marketState":0,
	"stops_level":0,
	"lotCurrency":"EUR",
	"displayName":"EURUSD",
	"clearName":"EURUSD",
	"priceOpen":1.1137,
	"popular":true,
	"mover":0
     }
 },

{ 
	symbol:'BTC',
  	data:{
  	"bid":1.18136,
	"ask":1.18138,
	"spread_diff":0,
	"symbol":"COINBASE:BTCUSD",
	"digits":5,
	"currency":"EUR",
	"description":"Euro vs US Dollar",
	"contract_size":100000,
	"percentage":0.909,
	"instrument":0,
	"volumeMin":1,
	"volumeMax":3000,
	"volumeStep":1,
	"tick_size":0,
	"tick_value":0,
	"margin_initial":0,
	"mode":0,
	"profit_mode":0,
	"group":"Forex",
	"marketState":0,
	"stops_level":0,
	"lotCurrency":"EUR",
	"displayName":"EURUSD",
	"clearName":"EURUSD",
	"priceOpen":1.137,
	"popular":true,
	"mover":0
     }
     },
     { 
	symbol:'EURSDG',
  	data:{
  	"bid":1.18136,
	"ask":1.18138,
	"spread_diff":0,
	"symbol":"IDC:EURSDG",
	"digits":5,
	"currency":"EUR",
	"description":"Euro vs US Dollar",
	"contract_size":100000,
	"percentage":0.909,
	"instrument":0,
	"volumeMin":1,
	"volumeMax":3000,
	"volumeStep":1,
	"tick_size":0,
	"tick_value":0,
	"margin_initial":0,
	"mode":0,
	"profit_mode":0,
	"group":"Forex",
	"marketState":0,
	"stops_level":0,
	"lotCurrency":"EUR",
	"displayName":"EURUSD",
	"clearName":"bURUSD",
	"priceOpen":1.181,
	"popular":true,
	"mover":0
     }
 },

	],  
 },  
 reducers: {   
  update: (state) => {   
      
     state.asset = "usa"    
 }, 
 },   
 
})


export const orderSlice = createSlice({ 
 name: 'order',  
 initialState: {    
 asset: { 
	"bid":1.18136,
	"ask":1.18138,
	"spread_diff":0,
	"symbol":"EURUSDecn",
	"digits":5,
	"currency":"EUR",
	"description":"Euro vs US Dollar",
	"contract_size":100000,
	"percentage":0.909,
	"instrument":0,
	"volumeMin":1,
	"volumeMax":3000,
	"volumeStep":1,
	"tick_size":0,
	"tick_value":0,
	"margin_initial":0,
	"mode":0,
	"profit_mode":0,
	"group":"Forex",
	"marketState":0,
	"stops_level":0,
	"lotCurrency":"EUR",
	"displayName":"EURUSD",
	"clearName":"AURUSD",
	"priceOpen":1.18137,
	"popular":true,
	"mover":0
	}, }, 
 
 reducers: {   
  edit: (state, action)=> ({   
        
     ...state,asset: action.payload
 }), 

  decreaselots:(state, action)=>void({
  	...state.asset.priceOpen-=10
  }), 
  increaselots:(state, action)=>void({
  	...state.asset.priceOpen+=10
  }), 
  increasestoplevel:(state, action)=>void({
  	...state.asset.stops_level+=10
  }),  
   decreasestoplevel:(state, action)=>void({
  	...state.asset.stops_level-=10
  }),
   resetstoplevel:(state, action)=>void({
  	...state.asset.stops_level=0
  }),
  
   },
})




export const chartSlice = createSlice({ 
 name: 'chart',  
 initialState: {    
  asset:{ 
	
	"symbol":"EURUSDecn",
	
	},  
 },  
 reducers: {   
  changeChart: (state) => {   
     
     state.asset.symbol = "usa"    
 },    
 },
})


export const groupSlice = createSlice({ 
 name: 'group',  
 initialState: {    
  group:"most popular",  
 },  
 reducers: {   
  changeGroup: (state, action) => {   
     
     state.group = action.payload   
 },    
 },
})

export const searchSlice = createSlice({ 
 name: 'search',  
 initialState: {    
  search:"",  
 },  
 reducers: {   
  changeSearch: (state, action) => {   
     
     state.search = action.payload   
 },    
 },
})

export const menuSlice = createSlice({
	name:'menu',
	initialState:{
		settings_opened:false,
	},
	reducers:{
		toggleMenu:(state, action)=>{
			state.settings_opened=action.payload ;
		}
	}
})

export const mobileMenuSlice = createSlice({
	name:'mobilemenu',
	initialState:{
		mobilemenu:{
			"status":false,
			"currentView":2,
		} 
	},
	reducers:{
		toggleMobileMenu:(state, action)=>({
			...state, mobilemenu : action.payload
		}),
		switchMobileView:(state,action)=>({
			...state, mobilemenu : action.payload
		}),
	}
})

const reducer = combineReducers({
	asset:assetSlice.reducer,
	order:orderSlice.reducer,
	chart:chartSlice.reducer,
	group:groupSlice.reducer,
	search:searchSlice.reducer,
	menu:menuSlice.reducer,
	mobilemenu:mobileMenuSlice.reducer
})




export const {  update } = assetSlice.actions
export const { edit,increaselots,decreaselots,  increasestoplevel,  decreasestoplevel,  resetstoplevel} = orderSlice.actions
export const { changeChart } = chartSlice.actions
export const { changeSearch } = searchSlice.actions
export const { changeGroup } = groupSlice.actions
export const {toggleMenu } = menuSlice.actions
export const {toggleMobileMenu, switchMobileView} = mobileMenuSlice.actions
export default reducer

 