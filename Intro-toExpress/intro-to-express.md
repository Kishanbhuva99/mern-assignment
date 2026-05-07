## Introduction to Express js
|Feature|http Module|Express.js Framework|
|----|----|----|
|Routing|Requires manual if/else or switch blocks to check every URL.|Provides clean methods like app.get(), app.post(), etc|
|Parsing|You must manually collect and parse data buffers to read JSON.|Uses middleware like express.json() to handle data in one line.|
|URL Params|Requires complex Regex or external libraries to find :id.|Built-in support via req.params.|
|Code Size|A simple server takes 20-30 lines of complex code.|A simple server takes about 5-10 lines of readable code.|