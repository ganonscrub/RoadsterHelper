// ==UserScript==
// @name         Roadster Helper
// @namespace    ganonscrub_script
// @version      0.1
// @description  Makes RoadsterRoutes slightly less bad
// @author       ganonscrub
// @include      *uml.edu/routes/*
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/ganonscrub/RoadsterHelper/master/RoadsterHelper.js
// ==/UserScript==

document.getElementsByClassName( "content" )[0].className = "content accordian";

function showNumbers(){
    $("body").addClass("showLabels");
}

function hideNumbers(){
    $("body").removeClass("showLabels");
}

function shouldShowNumbers(){
    if ( document.cookie.indexOf( "showNumbers" ) == -1 ){
        document.cookie = "showNumbers=false";
        return false;
    }
    else{
        if ( document.cookie.indexOf( "showNumbers=true" ) != -1 )
            return true;
        else if ( document.cookie.indexOf( "showNumbers=false" ) != -1 )
            return false;
        else
            console.error( "BIG PROBLEM IN shouldShowNumbers" );
    }
}

function makeAccordianScrollable(){
    var box = $(".content.accordian");
    if ( window.innerHeight < 533 ){
        //console.log( box.height(), window.innerHeight );
        box.height( window.innerHeight );
        box.css( { overflow:"scroll" } );
    }
    else{
        box.height( 543 );
        $("#accordian").width( 220 );
        box.css( { overflow:"visible" } );
    }
}

function cookieToggle(){
    var checkboxes = $("[name=busLabelsToggle]");
    var checked = checkboxes.prop( "checked" );
    console.log( "checked returned " + checked.toString() );
    if ( checked )
        document.cookie = "showNumbers=true";
    else
        document.cookie = "showNumbers=false";
}

$(document).ready( function(){
 
    if ( shouldShowNumbers() )
        showNumbers();
    
    makeAccordianScrollable();
    
	$(window).resize( makeAccordianScrollable );
    
    document.getElementsByClassName( "button" )[5].addEventListener( function() {
        $("[name=busLabelsToggle]").click( cookieToggle );
    });
    
});