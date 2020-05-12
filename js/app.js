'use strict';

var parent = document.getElementById('imgs');
var allImgs = [];

function ImageCreator(url, name) {
  this.url = url;
  this.name = name;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

new ImageCreator('../imgs/bag.jpg', 'bag');
new ImageCreator('../imgs/banana.jpg', 'banana');
new ImageCreator('../imgs/bathroom.jpg', 'bathroom');
new ImageCreator('../imgs/boots.jpg', 'boots');
new ImageCreator('../imgs/breakfast.jpg', 'breakfast');
new ImageCreator('../imgs/bubblegum.jpg', 'bubblegum');
new ImageCreator('../imgs/chair.jpg', 'chair');
new ImageCreator('../imgs/cthulhu.jpg', 'cthulhu');
new ImageCreator('../imgs/dog-duck.jpg', 'dog-duck');
new ImageCreator('../imgs/dragon.jpg', 'dragon');
new ImageCreator('../imgs/pen.jpg', 'pen');
new ImageCreator('../imgs/pet-sweep.jpg', 'pet-sweep');
new ImageCreator('../imgs/scissors.jpg', 'scissors');
new ImageCreator('../imgs/shark.jpg', 'shark');
new ImageCreator('../imgs/sweep.png', 'sweep');
new ImageCreator('../imgs/tauntaun.jpg', 'tauntaun');
new ImageCreator('../imgs/unicorn.jpg', 'unicorn');
new ImageCreator('../imgs/usb.gif', 'usb');
new ImageCreator('../imgs/water-can.jpg', 'water-can');
new ImageCreator('../imgs/wine-glass.jpg', 'wine-glass');
