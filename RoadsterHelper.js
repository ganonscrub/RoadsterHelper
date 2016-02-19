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
	$(window).resize( function(){
		var acc = $("#accordian");
		if ( acc.height() > window.innerHeight ){
			console.log( acc.height(), window.innerHeight );
			acc.height( window.innerHeight + 20 );
			acc.css( { overflow:"scroll" } );
		}
		else{
			acc.height( 627 );
			acc.css( { overflow:"visible" } );
		}
	});
});