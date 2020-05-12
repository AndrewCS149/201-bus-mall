'use strict';

var parent = document.getElementById('imgs');
var allImgs = [];

function Image(url, alt, title) {
  this.url = url;
  this.alt = alt;
  this.title = title;
  this.vote = 0;
  this.views = 0;
  allImgs.push(this);
}

