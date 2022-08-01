// ==UserScript==
// @name         Amazon - Keep Triggering Pagination
// @namespace    https://github.com/Sporkyy/
// @version      1.0.2
// @description  Keep triggering pagination on Amazon
// @author       Sporkyy
// @match        https://*.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const qs = (s, c = document) => c.querySelector(s);

  const selectors = [
    // Bad things happened when clicking on **all** the other months
    '#currentDelivery span[class*="pagination-trigger"]',
    '#mysContainer span[class*="pagination-trigger"]',
  ].join(',');

  const keepPaging = () => {
    const trigger = qs(selectors);
    if (trigger) trigger.click();
  };

  window.setInterval(keepPaging, 1000);
})();
