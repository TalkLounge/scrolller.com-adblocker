// ==UserScript==
// @name            Scrolller.com Adblocker
// @name:de         Scrolller.com Werbeblocker
// @version         1.0.3
// @description     Blocks Ads and the Premium, Adblock & Bandwidth Popup on Scrolller.com
// @description:de  Blockiert Werbung und das Premium, Adblock & Bandwith Popup auf Scrolller.com
// @icon            https://scrolller.com/assets/favicon-16x16.png
// @author          TalkLounge (https://github.com/TalkLounge)
// @namespace       https://github.com/TalkLounge/scrolller.com-adblocker
// @license         MIT
// @match           https://scrolller.com/*
// @grant           none
// ==/UserScript==

(function () {
    'use strict';

    const s = document.createElement("style");
    s.innerHTML = `.popup:has(#recommendations__popup) {
        display: none;
    }

    /* Anti-Adblock Popup */
    .popup:has(svg[width=80]) {
        display: none;
    }

    /* Legacy */
    .popup:has([class^=PremiumCTAPopup]) {
        display: none;
    }

    /* Premium Popup */
    .popup:has(img[src*=cat]) {
        display: none;
    }

    /* Bandwidth Popup */
    .popup:has([class^=_description]) {
        display: none;
    }

    /* Banner Ad */
    .fullscreen-view__ad {
        display: none;
    }

    /* Feed Ads */
    .vertical-view__column > .vertical-view__item {
        visibility: hidden;
    }`;
    document.head.append(s);

    const old_window_top_fetch = window.top.fetch;
    window.top.fetch = function () {
        if (arguments[1] && arguments[1].body && arguments[1].body.indexOf("AffiliateQuery") != -1) {
            return;
        }

        return old_window_top_fetch.apply(this, arguments);
    };
})();
