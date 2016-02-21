// ==UserScript==
// @name         Roadster Helper
// @namespace    ganonscrub_script
// @version      0.2
// @description  Makes RoadsterRoutes slightly less bad
// @author       ganonscrub
// @include      *uml.edu/routes/*
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/ganonscrub/RoadsterHelper/master/RoadsterHelper.js
// ==/UserScript==

var expires = new Date();
expires.setYear( expires.getYear() + 1900 + 1 );

document.getElementsByClassName( "content" )[0].className = "content accordian";

function showNumbers(){
    $("body").addClass("showLabels");
}

function hideNumbers(){
    $("body").removeClass("showLabels");
}

function shouldShowNumbers(){
    if ( document.cookie.indexOf( "showNumbers" ) == -1 ){
        document.cookie = "showNumbers=false; expires=" + expires;
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
    var acc = $("#accordian");
    var box = $(".content.accordian");
    if ( window.innerHeight < 533 ){
        //console.log( box.height(), window.innerHeight );
        box.height( window.innerHeight );
        box.css( { overflow:"scroll" } );
    }
    else{
        //box.height( 543 );
        box.height( acc.height() );
        acc.width( 220 );
        box.css( { overflow:"visible" } );
    }
}

function cookieToggle(){
    var toggle = $("#permNumbersToggle");
    if ( shouldShowNumbers() ){
        toggle.prop( "innerHTML", "NUMBERS OFF" );
        toggle.css( { "color": "crimson" } );
        
        document.cookie = "showNumbers=false; expires=" + expires;
        hideNumbers();
    }
    else{
        toggle.prop( "innerHTML", "NUMBERS ON" );
        toggle.css( { "color": "chartreuse" } );
        document.cookie = "showNumbers=true; expires=" + expires;
        showNumbers();
    }
}

function bannerResize(){
    var toggle = $("#permNumbersToggle");    
    
    toggle.css( { "margin-left": window.innerWidth / 2 } );
}

$(document).ready( function(){
 
    $("body").append( "<div id='permNumbersToggle'></div>" );
    var toggle = $("#permNumbersToggle");    
    if ( shouldShowNumbers() ){
        toggle.prop( "innerHTML", "NUMBERS ON" );
        toggle.css( { "color": "chartreuse" } );
    }
    else{
        toggle.prop( "innerHTML", "NUMBERS OFF" );
        toggle.css( { "color": "crimson" } );
    }    
    toggle.css( { "position": "absolute", "width": "auto", "margin-left": window.innerWidth / 2, "margin-top": "10px", "font-size": "16px", "font-weight": "bold", "z-index": 1, "cursor": "pointer" } );
    toggle.click( cookieToggle );
    
    openMoreInfo();
    closeMoreInfo();
    
    if ( shouldShowNumbers() )
        showNumbers();
    
	$(window).resize( makeAccordianScrollable );
    $(window).resize( bannerResize );
    
    setTimeout( makeAccordianScrollable, 1000 );    
});