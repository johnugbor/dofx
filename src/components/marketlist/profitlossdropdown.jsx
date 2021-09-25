import React from 'react'
import { Dropdown, DropdownButton } from "react-bootstrap";
function ProfitLossDropdown() {
	return (
		<div>
	<DropdownButton id="dropdown-basic-button" >
  <Dropdown.Item href="#/action-1">Ratipng</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Amount $</Dropdown.Item>
  
</DropdownButton>
		</div>
	)
}

export default ProfitLossDropdown;