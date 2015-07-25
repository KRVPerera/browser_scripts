// ==UserScript==
// @name         FRIENDS
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://putlocker.is/watch-friends-tvshow-online-free-putlocker.html
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }

    return xnodes;
}

alert("Watched 6:7");
$(_x('/html/body/table[2]/tbody/tr/td[1]/div[1]/table[7]/tbody/tr[8]/td[2]')).css('background', 'green');
