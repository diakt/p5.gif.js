var gif;
var giphy;

function preload() {
  // var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';
  // giphy = loadJSON(url);

  // console.log(giphy)
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // console.log(giphy)
  // gif = loadGif(giphy.data[0].images.fixed_height.url)
  gif = loadGif('test.gif');
  gif.pause();
}

var filters = [
  'invert',
  // 'threshold',
  'gray',
  'erode',
  'dilate'
]

var stop = false;
var flag;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function countWidth() {

}

function countHeight() {

}
var frame;
var offsetTop = 0;
var offesetLeft = 0;
var len;
function draw() {  
  // background(0,0,0);
  if (gif && gif.loaded() && !stop) {
      frame = gif.frame(10);
      var data = gif.frames()[10].data;
      len = gif.frames().length;
      var w = data.width;
      var h = data.height;
      var r = w/h;

      var s = w * h * len;
      var square = width * height;
      
      // console.log({w, h, r, s, square});
      
      // image(gif, 0, 0);
      // stop = true;
      if (!stop)
        gif.frames().forEach(printFrame.bind(null, 0.26));
  }
}

var leftIndex = 0;

function printFrame (ratio, frame, i) {
    var frameWidth = frame.data.width * ratio;
    var frameHeight = frame.data.height * ratio;
    
    offsetLeft = frameWidth * leftIndex;
    leftIndex++;
    if (offsetLeft + frameWidth > width) {
      leftIndex = 0;
      offsetLeft = 0;
      offsetTop += frameHeight;
    }

    if (offsetTop + frameHeight > height) {
      stop = true;
    }

    if (!stop) {
      console.log({offsetLeft, offsetTop, frameWidth, frameHeight, i, len});
      gif.frame(i);
      // image(gif).filter(getRandomInt(0,3))
      image(gif, offsetLeft, offsetTop, frameWidth, frameHeight);
    }

    if (i === gif.frames().length - 1) {
      stop = true;
    }
}

function mouseMoved() {
  if (gif && gif.loaded() && !gif.playing()){
    var totalFrames = gif.totalFrames();
    var frame = int(map(mouseX, 0, width, 0, totalFrames));
    gif.frame(frame);
  }
}

function mousePressed() {
  stop = true
}
