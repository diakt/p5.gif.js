/*
 *@ibnibraahim You need to install pkg-config. 

brew install pkg-config cairo libpng jpeg giflib
 
*/

var gif;
var gif2;
var giphy;

var outGif;
var record = true;

function setupGif() {
  outGif = new GIF({
    workers: 2,
    quality: 40
  });

  outGif.on('finished', function(blob) {
    var win = window.open(URL.createObjectURL(blob), "_blank");
    win.document.title = 'Rendered GIF'
    setupGif();
  });
}

function preload() {
  // var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';
  // giphy = loadJSON(url);

  // console.log(giphy)
  gif = loadGif('test.gif');
  gif2 = loadGif('test.gif');
  // jpg = loadImage('code.jpg');
}

var order = [];

var c;

function setup() {
  c = createCanvas(window.innerWidth, window.innerHeight);
  setupGif();
  // console.log(giphy)
  // gif = loadGif(giphy.data[0].images.fixed_height.url)

}

var filters = [
  'invert',
  // 'threshold',
  'gray',
  'erode',
  'dilate'
]

var blendDefault = 'BLEND | DARKEST | LIGHTEST | DIFFERENCE | MULTIPLY| EXCLUSION | SCREEN | REPLACE | OVERLAY | HARD_LIGHT | SOFT_LIGHT | DODGE | BURN | ADD | NORMAL';
var blends = blendDefault.split(' | ').map(mode => mode.toLowerCase())


var stop = false;
var flag;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomBlend () {

}

function countWidth() {

}

function countHeight() {

}
var frame;
var frameDelay;
var offsetTop = 0;
var offesetLeft = 0;
var len;

var loaded = false;

function draw() {
  if (gif.loaded() && gif2.loaded() && !loaded) {
    len = gif.frames().length;
    order = _.range(len);
    order = _.chain(order).map((item, i) => i).shuffle().value();
    frameDelay = gif.frames()[0].delay;
    console.log(order)
    loaded = true;
  }
  
  if (loaded && !stop) {
    frame = int(frameCount/frameDelay) % len;
    gif.frame(order[frame]);
    console.log(`count: ${frame}; len: ${len}; frame: ${order[frame]}`);
    // gif.filter(filters[getRandomInt(0,3)])
    
    image(gif);
    
    if (frameCount % 24) {
      tint(255, getRandomInt(0, 55));
      image(gif2);
      if (record) {
        outGif.addFrame(c.elt, {delay: 1, copy: true});
      }
      // blend(gif2, 0, 0, width, height, 0, 0, width, height, blends[getRandomInt(0, blends.length - 1)]);  
    }
    
  }
}

function drawFrames() {  
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
  stop = !stop;
  if (record) {
    outGif.render();
    record = !record
  }  
}
