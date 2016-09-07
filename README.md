# yacy_webclient_bootstrap
This is a YaCy Search Client using Bootstrap which can be used as a template for your own search portal!

This can be hosted on github pages. Here is the example link to this repository:
http://yacy.github.io/yacy_webclient_bootstrap/

The search result from the default cofiguration is retrieved either from http://search.yacy.net (the demo portal of YaCy)
if you open the web pages from a http-hosted location like github pages) or the search results are retrieved from your
local YaCy installation at ```http://localhost:8090``` if you open the pages from a ```file://```-path.

To run your own search portal with your own search index, just change the ```server``` setting in ```js/setup.js```.

To download the YaCy search server, go to http://yacy.net

