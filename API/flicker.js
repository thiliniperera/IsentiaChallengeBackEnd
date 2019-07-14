const fetch = require('node-fetch');
const {logger} = require('../config/winston');
const parse = require('parse-jsonp')

const flickerFeed = "https://www.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&callback=jsonFlickrFeed";

async function getFeed(searchQuery){
    let feed;
    try {
        feed =  await fetch(flickerFeed+"&tags"+searchQuery) 
        .then((res) => res.text())
        .then((jsonp) => parse('jsonFlickrFeed', jsonp))
      } catch(err) {
        logger.error("Error occured when calling Flicker API : "+err);
      }
    return feed;
};

function jsonFlickrFeed(rsp){
  return rsp;
}

module.exports = {getFeed,jsonFlickrFeed};