// ==UserScript==
// @name       Leave Twitter Header Alone
// @namespace  https://twitter.com/BarackObama
// @version    0.2.4
// @description Disable Twitter header chasing
// @include    /^https?:\/\/twitter\.com\/[a-zA-Z0-9_]+/
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

    var headerImage = document.querySelector('.ProfileCanopy-headerBg img');
    var globalNavHeight = document.getElementsByClassName('global-nav')[0].clientHeight;
    var headerImageHeight = (headerImage && headerImage.clientHeight > 0) ? headerImage.clientHeight : 0;
    var hasHeaderImage = headerImageHeight > 0;
    var profileCanopyHeight = globalNavHeight + headerImageHeight;
    beStylish(".topbar.js-topbar {" +
              "    position: absolute !important;" +
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
              "    margin-top: " + globalNavHeight + "px !important;" +
              "}");
    if (hasHeaderImage) {
        beStylish("#page-container {" +
                  "    padding-top: 0px !important;" +
                  "}");
    }
    beStylish(".ProfileCanopy.is-locked .ProfileCanopy-inner {" +
              "    position: static !important;" +
              "    top: auto !important;" +
              "    -webkit-transform: none !important;" +
              "    transform: none !important;" +
              "    width: auto !important;" +
              "}");
    beStylish(".ProfileCanopy-header {" +
              "    margin-top: 0px !important;" +
              "}");

    var resizeHeader = function() {
        if (hasHeaderImage) {
            var profileCanopyLarge = document.getElementsByClassName('ProfileCanopy')[0];
            var profileCanopyHeader = document.getElementsByClassName('ProfileCanopy-header')[0];
            profileCanopyLarge.style.height = profileCanopyHeight + 'px';
            profileCanopyHeader.style.height = profileCanopyHeight + 'px';
        }
    }
    resizeHeader();
    window.onresize = resizeHeader;
})();

