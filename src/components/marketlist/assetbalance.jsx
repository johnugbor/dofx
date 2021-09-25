import React from 'react'
import "../../styles/assetbalance.css"
export default function AssetBalaance() {
	return (
		<div class="asset-balance">
			<div class="asset-balance-labels">
					<div class="asset-balance-label">
					
					<span>24 % Sellers</span>
					</div>
					<div class="asset-balance-label">
					
					<span className="asset-balance-buyer">76% Buyers</span>
					</div>
			</div>
			<div class="asset-balance-middle">
			<div class="asset-balance-indicator">
			<div class="asset-balance-indicator-item asset-balance-indicator-item__sell"> 
			</div>
			<div class="asset-balance-indicator-item asset-balance-indicator-item__buy" >
			</div>
			</div>
			</div>
			</div>
	)
}



