// ==UserScript==
// @name         csdn 阅读全文
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解除 CSDN 阅读全文次数限制，自动展开全文
// @author       lousuan
// @match        https://blog.csdn.net/*/article/details/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    localStorage.removeItem('anonymousUserLimit');
    document.getElementById("btn-readmore").click();
})();