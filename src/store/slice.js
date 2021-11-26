import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from "redux"

export const assetSlice = createSlice({
	name: 'asset',
	initialState: {
		asset: [


			{
				symbol: 'EURUSD',
				data: {
					"bid": 1.28136,
					"ask": 1.28138,
					"spread_diff": 0,
					"symbol": "FX:EURUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "EURUSD",
					"clearName": "EURUSD",
					"priceOpen": 1.2237,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/15a0bd3235c2282bd533b07bc1b504f0.png"
				}
			},

			{
				symbol: 'EURNOK',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:EURNOK",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "EURNOK",
					"clearName": "EURUSD",
					"priceOpen": 1.1137,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/5d5b138c81c54b5d5d752393425688ce.png"
				}
			},

			{
				symbol: 'BTCUSD',
				data: {
					"bid": 54321.19,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:BTCUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BTCUSD",
					"clearName": "EURUSD",
					"priceOpen": 55489.87,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/880b8dffd101a34eef5c7886eeaaf52b.png"
				}
			},
			{
				symbol: 'AUDCAD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX:AUDCAD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "AUDCAD",
					"clearName": "EURUSD",
					"priceOpen": 1.137,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/82117d81a2e6b3354b67dae376e13b86.png"
				}
			},
			{
				symbol: 'GBPUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:GBPUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "GBPUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/b67a14c395bdbd290683f66b5bc3cc7a.png"
				}
			},

			{
				symbol: 'AUDCHF',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:AUDCHF",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "AUDCHF",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/a8bb8512e5b6d5bf2707c9544b02878d.png"
				}
			},

			{
				symbol: 'AUDUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:AUDUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "AUDUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/b67a14c395bdbd290683f66b5bc3cc7a.png"
				}
			},

			{
				symbol: 'ETHUSD',
				data: {
					"bid": 3178.22,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:ETHUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "ETHUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/05ca9eb2700a2c84faaf6bad2bebcad7.png"
				}
			},

			{
				symbol: 'EURSEK',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:EURSEK",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "EURSEK",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/fed3bb8e56889aaaaa5709f1540d6f74.png"
				}
			},

			{
				symbol: 'USDJPY',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:USDJPY",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "USDJPY",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/8f69a8cf7699f37d4754da88550816be.png"
				}
			},

			{
				symbol: 'USDCAD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:USDCAD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "USDCAD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/da80fe9d4c036050bff3b893c2224960.png"
				}
			},

			{
				symbol: 'USDCNY',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX_IDC:USDCNY",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "USDCNY",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/d0246a829528ee7c47a3543e81b9648b.png"
				}
			},

			{
				symbol: 'XRPUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "BITSTAMP:XRPUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "XRPUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/44f203641e320c9a7723fa2c87825d3b.png"
				}
			},

			{
				symbol: 'ADAUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:ADAUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "ADAUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/e1738a3c0b11d1520790dc676994b51d.png"
				}
			},

			{
				symbol: 'BCHUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:BCHUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BCHUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/4ea3cd3185b6e3fb9a0de9712a1b9fce.png"
				}
			},

			{
				symbol: 'DASHUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:DASHUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "DASHUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/40bc0c08e3aa82a4a315ded750561278.png"
				}
			},

			{
				symbol: 'EOSUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:EOSUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "EOSUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/cc42f4f0bcfad6c8c9ed7e58dd34f76f.png"
				}
			},

			{
				symbol: 'ETCUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:ETCUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "ETCUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png"
				}
			},

			{
				symbol: 'AUDJPY',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX:AUDJPY",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "AUDJPY",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/465ac55bf18e80eb1c572d90f11f2f99.png"
				}
			},

			{
				symbol: 'ABNB',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:ABNB",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "ABNB",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/airbnb-512.png"
				}
			},

			{
				symbol: 'NZDUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX:NZDUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "NZDUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/4674011af87db1d6f541d3caba6c0fe9.png"
				}
			},

			{
				symbol: 'CADCHF',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "FX:CADCHF",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Forex",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "CADCHF",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/de5d6eb81739178f927235d377384224.png"
				}
			},

			{
				symbol: 'AAPL',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:AAPL",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "AAPL",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/5e4f1f009edc913b5630f61aa7a39846.png"
				}
			},

			{
				symbol: 'BOEING',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:BOEING",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BOEING",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/72aa1b666d74fd11c7fcce6a60725cbf.png"
				}
			},

			{
				symbol: 'BABA',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:BABA",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BABA",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/c4465ca23dc3c5acadd861412db8d9cf.png"
				}
			},

			{
				symbol: 'MA',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:MA",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "MA",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/17896907bbb61ddf8e983a08cb7a3a3a.png"
				}
			},

			{
				symbol: 'MSFT',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:MSFT",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "MSFT",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/2bed397f3f062754d0a658df95063234.png"
				}
			},

			{
				symbol: 'GOOGLE',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:GOOGLE",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "GOOGLE",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/90ef5f0e1c44b7dada77f7ccd44549be.png"
				}
			},

			{
				symbol: 'FB',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:FB",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "FB",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/895cb03cd1ae9cb964cae1b62b3dc820.png"
				}
			},

			{
				symbol: 'NVDA',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:NVDA",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "NVDA",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s3-symbol-logo.tradingview.com/nvidia.svg"
				}
			},

			{
				symbol: 'JPM',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:JPM",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "JPM",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s3-symbol-logo.tradingview.com/jpmorgan-chase.svg"
				}
			},

			{
				symbol: 'BMW',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "CAPITALCOM:BMW",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BMW",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/c52bab92d0b8c875e42326bc7f47e22e.png"
				}
			},

			{
				symbol: 'COKE',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:COKE",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "COKE",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/87d691762349a394ac43326c2adda71d.png"
				}
			},

			{
				symbol: 'TSLA',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:TSLA",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "TSLA",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/d85a9fd79eea32a3d75e7377b31da0e9.png"
				}
			},

			{
				symbol: 'BERK.A',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:BERK.A",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BERK.A",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s3-symbol-logo.tradingview.com/berkshire-hathaway.svg"
				}
			},

			{
				symbol: 'AMZN',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "NASDAQ:AMZN",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Stocks",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "AMZN",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.tradedwell.com/web-trader/media/84306aa5618bfd78a21f2b4b870b788b.png"
				}
			},

			{
				symbol: 'LTCUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:LTCUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "LTCUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/ecda4c3d97320877d78af58a522dff56.png"
				}
			},

			{
				symbol: 'NEOUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:NEOUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "NEOUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/abaf78d46a72f3921faf76b3222a699c.png"
				}
			},

			{
				symbol: 'XMRUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:XMRUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "XMRUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://www.101investing.com/web-trader/media/ec4581f31da7e4d152647ce0c497d0dc.png"
				}
			},

			{
				symbol: 'DOGEUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:DOGEUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "DOGEUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
				}
			},

			{
				symbol: 'BNBUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:BNBUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "BNBUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
				}
			},

			{
				symbol: 'SOLUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:SOLUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "SOLUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
				}
			},

			{
				symbol: 'VETUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:VETUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Cryptocurrencies",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "VETUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png"
				}
			},

			{
				symbol: 'TRXUSD',
				data: {
					"bid": 1.18136,
					"ask": 1.18138,
					"spread_diff": 0,
					"symbol": "COINBASE:TRXUSD",
					"digits": 5,
					"currency": "EUR",
					"description": "Euro vs US Dollar",
					"contract_size": 100000,
					"percentage": 0.909,
					"instrument": 0,
					"volumeMin": 1,
					"volumeMax": 3000,
					"volumeStep": 1,
					"tick_size": 0,
					"tick_value": 0,
					"margin_initial": 0,
					"mode": 0,
					"profit_mode": 0,
					"group": "Most Popular",
					"marketState": 0,
					"stops_level": 0,
					"lotCurrency": "EUR",
					"displayName": "TRXUSD",
					"clearName": "bURUSD",
					"priceOpen": 1.181,
					"popular": true,
					"mover": 0,
					"img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
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
			"bid": 1.18136,
			"ask": 1.18138,
			"spread_diff": 0,
			"symbol": "EURUSD",
			"digits": 5,
			"currency": "EUR",
			"description": "Euro vs US Dollar",
			"contract_size": 100000,
			"percentage": 0.909,
			"instrument": 0,
			"volumeMin": 1,
			"volumeMax": 3000,
			"volumeStep": 1,
			"tick_size": 0,
			"tick_value": 0,
			"margin_initial": 0,
			"mode": 0,
			"profit_mode": 0,
			"group": "Forex",
			"marketState": 0,
			"stops_level": 0,
			"lotCurrency": "EUR",
			"displayName": "EURUSD",
			"clearName": "AURUSD",
			"priceOpen": 1.18137,
			"popular": true,
			"mover": 0,
			"img": "https://www.101investing.com/web-trader/media/15a0bd3235c2282bd533b07bc1b504f0.png"
		},
	},



	reducers: {
		edit: (state, action) => ({

			...state, asset: action.payload
		}),

		decreaselots: (state, action) => void ({
			...state.asset.priceOpen -= 10
		}),
		increaselots: (state, action) => void ({
			...state.asset.priceOpen += 10
		}),
		increasestoplevel: (state, action) => void ({
			...state.asset.stops_level += 10
		}),
		decreasestoplevel: (state, action) => void ({
			...state.asset.stops_level -= 10
		}),
		resetstoplevel: (state, action) => void ({
			...state.asset.stops_level = 0
		}),

	},
})


export const accessSlice = createSlice({
	name: 'access',
	initialState: {
		access: {
			"code_token":"",
			"recovery_email":"",
			"token_identifier":"",
		
			
			"token":"",
			"uuid":"",
		}
	},
	reducers:{
		setAccessTokenUuid:(state,action)=>({
			...state, access : action.payload

		}),
		logOutandRemoveTokens:(state)=>({
			...state, access :{
				"code_token":"",
			"recovery_email":"",
			"token_identifier":"",
		
			
			"token":"",
			"uuid":"",
			}
		}),

	},
})

export const chartSlice = createSlice({
	name: 'chart',
	initialState: {
		asset: {

			"symbol": "EURUSD",

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
		group: "Most Popular",
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
		search: "",
	},
	reducers: {
		changeSearch: (state, action) => {

			state.search = action.payload
		},
	},
})

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		settings_opened: false,
	},
	reducers: {
		toggleMenu: (state, action) => {
			state.settings_opened = action.payload;
		}
	}
})

export const mobileMenuSlice = createSlice({
	name: 'mobilemenu',
	initialState: {
		mobilemenu: {
			"status": false,
			"currentView": 2,
		}
	},
	reducers: {
		toggleMobileMenu: (state, action) => ({
			...state, mobilemenu: action.payload
		}),
		switchMobileView: (state, action) => ({
			...state, mobilemenu: action.payload
		}),
	}
})

const reducer = combineReducers({
	asset: assetSlice.reducer,
	order: orderSlice.reducer,
	chart: chartSlice.reducer,
	group: groupSlice.reducer,
	search: searchSlice.reducer,
	menu: menuSlice.reducer,
	mobilemenu: mobileMenuSlice.reducer,
	access:accessSlice.reducer
})




export const { update } = assetSlice.actions
export const { edit, increaselots, decreaselots, increasestoplevel, decreasestoplevel, resetstoplevel } = orderSlice.actions
export const { changeChart } = chartSlice.actions
export const { changeSearch } = searchSlice.actions
export const { changeGroup } = groupSlice.actions
export const { toggleMenu } = menuSlice.actions
export const { toggleMobileMenu, switchMobileView } = mobileMenuSlice.actions
export const {setAccessTokenUuid} = accessSlice.actions
export default reducer
