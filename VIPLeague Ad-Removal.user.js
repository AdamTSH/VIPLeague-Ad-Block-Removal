// ==UserScript==
// @name         VIPLeague Ad-Block-Removal
// @version      0.1
// @description  Remove adblock message
// @match        http://www.vipleague.is/*
// @grant        none
// ==/UserScript==

(function() 
{
    $("img").each(function(index) {
        if($(this).attr('src') == "http://cdn.vipleague.se//images/Alert-Icon.png") {
            $(this).parent().parent().parent().parent().parent().parent().remove();
        }
    });
})();