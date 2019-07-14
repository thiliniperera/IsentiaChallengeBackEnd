var express = require('express');
const flicker = require('./API/flicker');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/feed', async function(req, res){
   searchQuery = req.query.search;   
   const feed = await flicker.getFeed(searchQuery);
    res.send(feed.items);
 });

app.listen(5000);