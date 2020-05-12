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

function randomNum() {
  return Math.ceil(Math.random() * allImgs.length - 1);
}

function getRandomImg() {
  parent.textContent = '';

  var idx1 = randomNum();
  var idx2 = randomNum();
  var idx3 = randomNum();

  while ((idx1 === idx2) || (idx1 === idx3) || (idx2 === 3)) {
    idx2 = randomNum();
    idx3 = randomNum();
  }

  // display first image
  allImgs[idx1].appendImage();
  allImgs[idx1].views++;

  // display second image
  allImgs[idx2].appendImage();
  allImgs[idx2].views++;

  // display third image
  allImgs[idx2].appendImage();
  allImgs[idx2].views++;
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