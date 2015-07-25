// ==UserScript==
// @name         online.mrt.ac.lk
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://online.mrt.ac.lk/login/index.php
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

jQuery(function($) {
    
    //alert(0);
    
    document.getElementById("username").value = "*************";
    document.getElementById("password").value = "*************";
    document.getElementById("loginbtn").click();
    
    
    
})
