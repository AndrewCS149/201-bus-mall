'use strict';

var parent = document.getElementById('imgs');
var allImgs = [];

// constructor function
function ImgCreator(url, name) {
  this.url = url;
  this.name = name;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

function randomNum() {
  return Math.ceil(Math.random() * allImgs.length - 1);
}

ImgCreator.prototype.appendImage = function () {
  var imageEl = document.createElement('img');

  imageEl.src = this.url;
  imageEl.title = this.name;

  parent.appendChild(imageEl);
};

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


// create all ImgCreator instances
new ImgCreator('../imgs/bag.jpg', 'bag');
new ImgCreator('../imgs/banana.jpg', 'banana');
new ImgCreator('../imgs/bathroom.jpg', 'bathroom');
new ImgCreator('../imgs/boots.jpg', 'boots');
new ImgCreator('../imgs/breakfast.jpg', 'breakfast');
new ImgCreator('../imgs/bubblegum.jpg', 'bubblegum');
new ImgCreator('../imgs/chair.jpg', 'chair');
new ImgCreator('../imgs/cthulhu.jpg', 'cthulhu');
new ImgCreator('../imgs/dog-duck.jpg', 'dog-duck');
new ImgCreator('../imgs/dragon.jpg', 'dragon');
new ImgCreator('../imgs/pen.jpg', 'pen');
new ImgCreator('../imgs/pet-sweep.jpg', 'pet-sweep');
new ImgCreator('../imgs/scissors.jpg', 'scissors');
new ImgCreator('../imgs/shark.jpg', 'shark');
new ImgCreator('../imgs/sweep.png', 'sweep');
new ImgCreator('../imgs/tauntaun.jpg', 'tauntaun');
new ImgCreator('../imgs/unicorn.jpg', 'unicorn');
new ImgCreator('../imgs/usb.gif', 'usb');
new ImgCreator('../imgs/water-can.jpg', 'water-can');
new ImgCreator('../imgs/wine-glass.jpg', 'wine-glass');

getRandomImg();