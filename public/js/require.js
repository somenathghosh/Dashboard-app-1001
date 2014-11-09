/*
 * Require.js 0.9.8
 * Module Loader - Load Any File into any Page.

 * Load external Libs and load others flowing the chain of Dependency

 *
 * Copyright 2014, Somenath Ghosh
 
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2014
*/


var require=function(b,c){if("js"==c){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",b)}else"css"==c&&(a=document.createElement("link"),a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href",b));"undefined"!=typeof a&&document.getElementsByTagName("head")[0].appendChild(a)};

