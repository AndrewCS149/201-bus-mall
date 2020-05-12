'use strict';

//TODO: calc percentages of votes to views for each img

// 2d array of imgs and img file paths
var imgsAndPaths = [
  ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],

  ['jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg','jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'gif', 'jpg', 'jpg']
];

var imgParent = document.getElementById('imgs');
var listParent = document.getElementById('vote-results');
var allImgs = [];
var rounds = 25;
var count = 0;

// constructor function
function ImgCreator(title, extension) {
  // this.url = url;
  this.filePath = `/imgs/${title}.${extension}`;
  this.title = title;
  this.alt = title;
  this.votes = 0;
  this.views = 0;
  this.hasVotes = false;
  allImgs.push(this);
}

function randomNum() {
  return Math.ceil(Math.random() * allImgs.length - 1);
}

// create an image element holding the title and url. Append to imgParent.
ImgCreator.prototype.appendImage = function () {
  var imageEl = document.createElement('img');

  imageEl.src = this.filePath;
  imageEl.title = this.title;

  imgParent.appendChild(imageEl);
};

// create a list item for every instance and display the view and vote counts
ImgCreator.prototype.appendList = function () {
  for (var i = 0; i < allImgs.length; i++) {
    if (allImgs[i].hasVotes === true) {
      var listItem = document.createElement('li');
      listItem.textContent = `${allImgs[i].title} had ${allImgs[i].votes} votes and was shown ${allImgs[i].views} times.`;

      listParent.appendChild(listItem);
    }
  }
};

function getRandomImg() {
  imgParent.textContent = '';

  // keep track of rounds
  if (count === rounds) { //TODO: doesnt add up
    imgParent.removeEventListener('click', getRandomImg);
    ImgCreator.prototype.appendList();
    return;
  }
  count++;

  // get random idx values
  var idx1 = randomNum();
  var idx2 = randomNum();
  var idx3 = randomNum();

  // ensure that all idx values are unique
  while ((idx1 === idx2) || (idx1 === idx3) || (idx2 === idx3)) {
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
  allImgs[idx3].appendImage();
  allImgs[idx3].views++;
}

// event listener to record how many times each image was clicked
imgParent.addEventListener('click', function () {
  var title = event.target.title;
  console.log(title);

  // loop through all images
  for (var i = 0; i < allImgs.length; i++) {

    // if title is equal to the clicked image title, increment vote by one
    if (title === allImgs[i].title) {
      allImgs[i].votes++;
      allImgs[i].hasVotes = true;
    }
  }
});

// create all ImgCreator instances
for(var i = 0; i < 20; i++) {
  new ImgCreator(imgsAndPaths[0][i], imgsAndPaths[1][i]);
}

getRandomImg();
