import GIF from 'gif.js'
import { loadGif } from 'p5.gif.js'
import _ from 'lodash'

const sketch = gifImages => (p) => {
  
  var gif;
  var gif2;
  var giphy;

  var outGif;
  var record = true;

  var c;
  var dom;
  var order = [];
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

  var frame;
  var frameDelay;
  var offsetTop = 0;
  var offesetLeft = 0;
  var len;

  var loaded = false; 

  p.preload = function() {
    gif = loadGif(p, gifImages[0]);
    gif2 = loadGif(p, gifImages[1]);
  }

  p.setup = function () {
    dom = document.querySelector('canvas');
  }

  p.draw = function () {

    var iter = p.frameCount % 100;
    if (gif.loaded() && gif2.loaded() && !loaded) {
        c = p.createCanvas(gif.width, gif.height);
        gif2.width = dom.width = gif.width;
        gif2.height = dom.height = gif.height;
        console.log(c)
        len = gif.frames().length;
        order = _.range(len);
        order = _.chain(order).map((item, i) => i).shuffle().value();
        frameDelay = gif.frames()[0].delay;
        console.log(order)
        loaded = true;
    }

    if (loaded && !stop) {
        frame = p.int(p.frameCount / frameDelay) % len;
        
        // console.log(`count: ${frame}; len: ${len}; frame: ${order[frame]}`);
        gif.frame(order[frame]);
        gif.filter('posterize', 2)

        p.image(gif);
        // tint(255, getRandomInt(0, 55));    
        p.tint(255, getRandomInt(100, 155));
        // if (iter < 50) {
            
            // image(gif);
            if (record) {
                // outGif.addFrame(c.elt, { delay: 1, copy: true });
            }
            // 3, 5, 7
            gif2.filter('posterize', 2)
            p.blend(gif2, 0, 0, p.width, p.height, 0, 0, p.width, p.height, 'multiply');
            // p.tint(220, 136, 52, 16);
            p.tint(255, 36);
        // }

    }
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default sketch;
