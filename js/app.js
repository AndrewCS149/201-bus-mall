'use strict';

var parent = document.getElementById('imgs');
var allImgs = [];

function ImageCreator(url, alt, title) {
  this.url = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

new ImageCreator('../imgs/bag.jpg', 'bag', 'bag');
new ImageCreator('../imgs/banana.jpg', 'banana', 'banana');
new ImageCreator('../imgs/bathroom.jpg', 'bathroom', 'bathroom');
new ImageCreator('../imgs/boots.jpg', 'boots', 'boots');
new ImageCreator('../imgs/breakfast.jpg', 'breakfast', 'breakfast');
new ImageCreator('../imgs/bubblegum.jpg', 'bubblegum', 'bubblegum');
new ImageCreator('../imgs/chair.jpg', 'chair', 'chair');
new ImageCreator('../imgs/cthulhu.jpg', 'cthulhu', 'cthulhu');
new ImageCreator('../imgs/dog-duck.jpg', 'dog-duck', 'dog-duck');
new ImageCreator('../imgs/dragon.jpg', 'dragon', 'dragon');
new ImageCreator('../imgs/pen.jpg', 'pen', 'pen');
new ImageCreator('../imgs/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new ImageCreator('../imgs/scissors.jpg', 'scissors', 'scissors');
new ImageCreator('../imgs/shark.jpg', 'shark', 'shark');
new ImageCreator('../imgs/sweep.png', 'sweep', 'sweep');
new ImageCreator('../imgs/tauntaun.jpg', 'tauntaun', 'tauntaun');
new ImageCreator('../imgs/unicorn.jpg', 'unicorn', 'unicorn');
new ImageCreator('../imgs/usb.gif', 'usb', 'usb');
new ImageCreator('../imgs/water-can.jpg', 'water-can', 'water-can');
new ImageCreator('../imgs/wine-glass.jpg', 'wine-glass', 'wine-glass');
