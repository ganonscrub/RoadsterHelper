// ==UserScript==
// @name         Roadster Helper
// @namespace    ganonscrub_script
// @version      0.1
// @description  Makes RoadsterRoutes slightly less terrible
// @author       ganonscrub
// @include      *uml.edu/routes/*
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/ganonscrub/RoadsterHelper/master/RoadsterHelper.js
// ==/UserScript==

$(document).ready( function(){
	showSettings();
	closeMoreInfo();
	document.getElementsByName( "busLabelsToggle" )[0].click();
});