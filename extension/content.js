/**
 * (c) 2015 Mike North <michael.l.north@gmail.com>
 * MIT License
 */

(function () {

  'use strict';

  var serviceUrls = {
    npm: 'https://www.npmjs.org/package/',
    bower: 'https://bower.herokuapp.com/packages/search/',
    composer: 'https://packagist.org/packages/'
  };
  
// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

  $('head').append('<style type="text/css">a[data-pkg-name]{cursor:pointer}</style>');

  start ();
  function start () {
    function run() {
      // if (!$(document.body).hasClass('boxcutter-processed')) {
      // }
      document.getElementsByTagName("iframe").foreach(iframe => ()=> { item.parenNode.removeChild(iframe) });
    }
    run();
  }
}());
