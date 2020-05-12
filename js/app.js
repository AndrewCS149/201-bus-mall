'use strict';

//TODO: calc percentages of votes to views for each img

var imgTitles = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imgExtensions = ['jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'gif', 'jpg', 'jpg'];

var imgParent = document.getElementById('imgs');
var listParent = document.getElementById('vote-results');
var allImgs = [];
var rounds = 25;
var count = 0;
var votesArr = [];
var rgbValues = [];
var rgbBorders = [];

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

// function to generate a random number
function randomNum(max) {
  return Math.ceil(Math.random() * max - 1);
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
    generateChart();
    return;
  }
  count++;

  // get random idx values
  var idx1 = randomNum(allImgs.length);
  var idx2 = randomNum(allImgs.length);
  var idx3 = randomNum(allImgs.length);

  // ensure that all idx values are unique
  while ((idx1 === idx2) || (idx1 === idx3) || (idx2 === idx3)) {
    idx2 = randomNum(allImgs.length);
    idx3 = randomNum(allImgs.length);
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

// push all votes into the global votesArr[]
function votesArray() {
  for (var i = 0; i < allImgs.length; i++) {
    votesArr.push(allImgs[i].votes);
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

getRandomImg();