// ==UserScript==
// @name       Leave Twitter Header Alone
// @namespace  https://twitter.com/BarackObama
// @version    0.1.0
// @description Disable Twitter header chasing
// @include    /^https:\/\/twitter\.com\/[a-zA-Z0-9_]+
// @copyright  2014+, Code Ass
// ==/UserScript==

(function() {
    function beStylish(str) {
        var sheet;
        var greatestest = document.getElementById('greatestest-css');
        if (!greatestest) {
            var style = document.createElement('style');
            style.setAttribute('id', 'greatestest-css');
            style.type = "text/css";
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(style);
            sheet = style.sheet;
        } else {
            sheet = greatestest.sheet;
        }
        sheet.insertRule(str.replace(/\n/g, ""), sheet.cssRules.length);
    }
    
    beStylish(".topbar.js-topbar {" +
              "    position: relative !important;" +
              "    border-bottom: 0px !important;" +
              "}");
    beStylish(".global-nav {" +
              "    border-bottom: 0px !important;" +
              "}");
    beStylish(".ProfileCanopy-headerBg {" +
              "    padding-top: 0px !important;" +
              "}");
    beStylish(".ProfileCanopy-headerBg img {" +
              "    position: static !important;" +
              "}");
    beStylish("#page-container {" +
              "    padding-top: 0px !important;" +
              "}");
    beStylish(".ProfileCanopy.is-locked .ProfileCanopy-inner {" +
              "    position: static !important;" +
              "    top: auto !important;" +
              "    -webkit-transform: none !important;" +
              "    transform: none !important;" +
              "    width: auto !important;" +
              "}");
    
    function resizeHeader() {
        var profileCanopyLarge = document.getElementsByClassName('ProfileCanopy--large')[0];
        var profileCanopyHeader = document.getElementsByClassName('ProfileCanopy-header')[0];
        var height = document.querySelector('.ProfileCanopy-headerBg img').clientHeight;
        profileCanopyLarge.style.height = height + 'px';
        profileCanopyHeader.style.height = height + 'px';
    }
    resizeHeader();
    window.onresize = resizeHeader;
})();

