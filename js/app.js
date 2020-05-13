'use strict';

//TODO: calc percentages of votes to views for each img

var imgTitles = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imgExtensions = ['jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'gif', 'jpg', 'jpg'];

var imgParent = document.getElementById('imgs');
var listParent = document.getElementById('vote-results');
var allImgs = [];
var rounds = 25;
var count = 1;
var votesArr = [];
var viewsArr = [];
var rgbValues = [];
var rgbBorders = [];
var uniqueIdxArr = [];

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

ImgCreator.prototype.render = function () {
  // get random idx values
  var idx1 = getRandomIdx();
  var idx2 = getRandomIdx();
  var idx3 = getRandomIdx();

  // display images
  allImgs[idx1].appendImage();
  allImgs[idx1].views++;
  allImgs[idx2].appendImage();
  allImgs[idx2].views++;
  allImgs[idx3].appendImage();
  allImgs[idx3].views++;
};

// create an image element holding the title and url. Append to imgParent.
ImgCreator.prototype.appendImage = function () {
  var imageEl = document.createElement('img');

  imageEl.src = this.filePath;
  imageEl.title = this.title;

  imgParent.appendChild(imageEl);
};

// A function to display three random images at a time to the page
function displayImage() {
  imgParent.textContent = '';

  var idx = getRandomIdx();
  allImgs[idx].render();
}

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

// function to generate a random number
function randomNum(max) {
  return Math.ceil(Math.random() * max - 1);
}

// function to get a random idx that is not in the uniqueIdxArr[]
function getRandomIdx() {

  var idx = randomNum(allImgs.length);

  while (uniqueIdxArr.includes(idx)) {
    idx = randomNum(allImgs.length);
  }

  uniqueIdxArr.push(idx);

  if (uniqueIdxArr.length > 6) {
    uniqueIdxArr.shift();
  }

  return idx;
}

// push all votes into the global votesArr[]
function votesArray() {
  for (var i = 0; i < allImgs.length; i++) {
    votesArr.push(allImgs[i].votes);
    viewsArr.push(allImgs[i].views);
  }
}

// function to generate a random rgb value and push to rgbValues[]
function generateRGB() {
  for (var i = 0; i < allImgs.length; i++) {
    var red = randomNum(255);
    var green = randomNum(255);
    var blue = randomNum(255);

    rgbValues.push(`rgba(${red}, ${green}, ${blue}, 0.2)`);
    rgbBorders.push(`rgb(${red}, ${green}, ${blue})`);
  }
}

// handler function for click event on #images
function handleClick(event) {
  var title = event.target.title;
  console.log(title);

  // loop through all images
  for (var i = 0; i < allImgs.length; i++) {

    // if title is equal to the clicked image title, increment vote by one
    if (title === allImgs[i].title) {
      allImgs[i].votes++;
      allImgs[i].hasVotes = true;

      // // keep track of rounds
      if (count === rounds) { //TODO: doesnt add up
        // imgParent.textContent = '';
        imgParent.removeEventListener('click', handleClick);
        ImgCreator.prototype.appendList();
        generateChart();
      }
      count++;
    }
  }
  displayImage();
}

imgParent.addEventListener('click', handleClick);

// create all ImgCreator instances
for (var i = 0; i < 20; i++) {
  new ImgCreator(imgTitles[i], imgExtensions[i]);
}

// generate chart
function generateChart() {
  votesArray();
  generateRGB();

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: imgTitles,
      datasets: [{
        label: '# of Votes',
        data: votesArr,
        backgroundColor: rgbValues,
        borderColor: rgbBorders,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// getRandomIdx();
displayImage();
// ImgCreator.prototype.render();