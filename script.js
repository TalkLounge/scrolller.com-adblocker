// ==UserScript==
// @name            Scrolller.com Adblocker
// @name:de         Scrolller.com Adblocker
// @version         1.0.0
// @description     Blocks Ads and the Get Premium Popup
// @description:de  Blockiert Werbungen und das Get Premium Popup
// @icon            https://scrolller.com/assets/favicon-16x16.png
// @author          TalkLounge (https://github.com/TalkLounge)
// @namespace       https://github.com/TalkLounge/scrolller.com-adblocker
// @license         MIT
// @match           https://scrolller.com/*
// @grant           none
// @run-at          document-start
// ==/UserScript==

(function () {
    'use strict';

    const old_window_top_fetch = window.top.fetch;

    window.top.fetch = function(...args) {
        return new Promise(async (resolve, reject) => {
            if (args[1].body.indexOf("AffiliateQuery") != -1) {
                reject();
            } else {
                resolve(await old_window_top_fetch.apply(null, args));
            }
        });
    };

	const s = document.createElement("style");
	s.innerHTML = `.popup {
		display: none;
	}`;
	document.head.append(s);
})();