// ==UserScript==
// @name         Amazon - Keep Triggering Pagination
// @namespace    https://github.com/Sporkyy/
// @version      1.0.1
// @description  Keep triggering pagination on Amazon
// @author       Sporkyy
// @match        https://*.amazon.com/*
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const qsa = (s, c = document) => c.querySelectorAll(s);

  const keepTriggering = () => {
    const triggers = qsa('*[class*="pagination-trigger"]');
    for (const trigger of triggers) trigger.click();
  };

  window.setInterval(keepTriggering, 1000);
})();
