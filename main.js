// ==UserScript==
// @name         Toyota Mayuko AtCoder
// @namespace    https://github.com/alllllllllly123
// @version      1.0.0
// @description  AtCoderでWAを出すと豊田真由子にキレられます。
// @author       alllllllllly123
// @match        https://atcoder.jp/*
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/541725/Toyota%20Mayuko%20AtCoder.user.js
// @updateURL https://update.greasyfork.org/scripts/541725/Toyota%20Mayuko%20AtCoder.meta.js
// ==/UserScript==

(function() {
    'use strict';
    $("span.label-warning:contains('WA')").html("このハゲーーー！！！").attr("data-original-title","ちーがーうーだーろー！！ ちがうだろーー！！！");
})();
