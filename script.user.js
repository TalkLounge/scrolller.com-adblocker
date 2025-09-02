// ==UserScript==
// @name            Scrolller.com Adblocker
// @name:de         Scrolller.com Werbeblocker
// @version         1.0.6
// @description     Blocks Ads and the Premium, Adblock & Bandwidth Popup on Scrolller.com
// @description:de  Blockiert Werbung und das Premium, Adblock & Bandwith Popup auf Scrolller.com
// @icon            https://scrolller.com/assets/favicon-16x16.png
// @author          TalkLounge (https://github.com/TalkLounge)
// @namespace       https://github.com/TalkLounge/scrolller.com-adblocker
// @license         MIT
// @match           https://scrolller.com/*
// @grant           GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`.popup:has(#recommendations__popup) {
        display: none;
    }

    /* General: Anti-Adblock Popup */
    .popup:has(svg[width=80]) {
        display: none;
    }

    /* General: Premium Popup */
    .popup:has(img[src*=cat]) {
        display: none;
    }

    /* Feed: Bandwidth Popup */
    .popup:has([class^=_description]) {
        display: none;
    }

    /* Feed: Upgrade for the Ultimate Experience! Popup */
    .popup:has([class^=body_description]) {
        display: none;
    }

    /* Feed: Inline Ads */
    [class^=verticalView_container] a[aria-label='Ad Link'] {
        visibility: hidden;
    }

	/* Feed: Inline Ads */
    main div:has(>div>div>iframe), [class^=verticalView_container] div:has(>div>div>iframe) {
        visibility: hidden;
    }

    /* Post: Banner Ad */
    #fullscreen-view a[class^=FullscreenView_adLink] {
        display: none;
    }

    /* Post: Right Bottom Corner Circle Ad */
    #fullscreen-view button:has(>div>img[src^='/assets/fullscreen']) {
        display: none;
    }

    /* Legacy */
    .popup:has([class^=PremiumCTAPopup]) {
        display: none;
    }

    /* Feed: Inline Ads */
    [class^=column_galleryColumn] [class^=handler_galleryItemHandler]:has(a[class^=native_nativeAd]) {
        visibility: hidden;
    }

    /* Feed: Inline Ads */
    [class^=column_galleryColumn] [class^=handler_galleryItemHandler]:has([class^=IframeLiveAd_iframeAdContainer]) {
        visibility: hidden;
    }

    /* Feed: Inline random first Video */
    [class^=column_galleryColumn] [class^=handler_galleryItemHandler]:has(.ez-video-wrap) {
        opacity: 0;
    }

    /* Feed: Right Bottom Corner Video Ad */
    #ez-video-outstream-wrap {
        display: none;
    }

    /* Right Bottom Corner Circle Ad */
    button[class^=LiveCircleButton_wrapper] {
        display: none;
    }`);
})();