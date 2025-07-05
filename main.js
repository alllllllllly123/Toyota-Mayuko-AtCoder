// ==UserScript==
// @name         Toyota Mayuko AtCoder
// @namespace    https://github.com/alllllllly
// @version      1.0.0
// @description  AtCoderでWAを出すと豊田真由子にキレられます。
// @author       alllllllllly
// @match        https://atcoder.jp/*
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    $("span.label-warning:contains('WA')").html("このハゲーーー！！！").attr("data-original-title","ちーがーうーだーろー！！ ちがうだろーー！！！");
})();
