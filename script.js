// ==UserScript==
// @name         test script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/documentation.php?ext=dhdg
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @include      /https?:\/\/live\.bilibili\.com\/[blanc\/]?[^?]*?\d+\??.*/
// @connect      passport.bilibili.com
// @connect      api.live.bilibili.com
// @connect      api.bilibili.com
// @connect      api.vc.bilibili.com
// @connect      live-trace.bilibili.com
// @resource     MY_CSS    https://cdn.jsdelivr.net/gh/AlexJoestar/VUP-CHEERS@latest/assets/cheers_modal.css
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let btn_txt_indicator = true;
    const my_css = GM_getResourceText("MY_CSS");
    GM_addStyle(my_css);

    let cheers_btn = document.createElement("button");
    cheers_btn.innerHTML = '显示打Call面板';
    let normal_bar = document.querySelector('.upper-right-ctnr');
    cheers_btn.className = "cheers-btn";
    cheers_btn.id = "settingBtn";

    normal_bar.append(cheers_btn);

    let modal_panel = document.createElement("div");
    modal_panel.className = "oen-task-panel";
    document.body.append(modal_panel);

    modal_panel.style.right = "30%";
    modal_panel.style.borderRadius = "8px";


    cheers_btn.onclick=function(){
        modal_panel.style.animationName = btn_txt_indicator? "bounceIn":"bounceOut";
        modal_panel.style.display = "inline-block"
        btn_txt_indicator = !btn_txt_indicator;
        cheers_btn.innerHTML = btn_txt_indicator? "显示打Call面板" : "隐藏打Call面板";
    }


})();