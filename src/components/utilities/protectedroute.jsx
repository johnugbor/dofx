import React from "react"
import {Redirect, Route} from "react-router-dom"
import LocalStorageService from "./localStorageService"
function ProtectedRoute({component:Component,...restOfProps}){
	const isAuthenticatd =
}