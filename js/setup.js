/*
 * setup.js
 * customization values for the yacy_webclient_bootstrap templates
 * (C) 2014, 2015 by Michael Peter Christen, licensed under a
 * Creative Commons Attribution 2.0 Generic License (CC-BY 2.0)
 *
 * HOW TO USE:
 * Just change the server address to your own search server address!
 * For example, if you want to use your local YaCy, set it to
 *
 * var server="localhost:8090";
 *
 * The address may be different from the place where this wab pages application is hosted
 * because the content is fetched using JSONP.
 *
 * After each update, you must change this again or save the address before doing an update.
 */

// In case that this page is hosted without any changes, it takes search results
// from search.yacy.net.
// If you host this locally, it takes results from your local running YaCy installation.
// Replace the server config with the host name of your own YaCy installation:
// i.e. var server="search.yacy.net";
//var server= window.location.href.startsWith("file://") ? "localhost:8090" : "yacy.searchlab.eu";
var server= "yacy.searchlab.eu"
var searchURL='http://' + server + '/yacysearch.json?callback=?';
//var searchURL='http://' + server + '/solr/select?callback=?';
//var searchURL='http://' + server + '/yacy/grid/mcp/index/yacysearch.json?callback=?';
//var suggestUrl='http://' + server + '/yacy/grid/mcp/index/suggest.json?callback=?';
var homepage="http://yacy.net";
var logo="../images/YaCyLogo2011_60.png";
var headline="Search Portal";
var greeting="Document Search";
var queryplaceholder="Document Retrieval";
