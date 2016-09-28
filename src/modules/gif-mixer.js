import GIF from 'gif.js'
import { loadGif } from 'p5.gif.js'
import _ from 'lodash'

const sketch = (p) => {
  
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
    gif = loadGif(p, '/test2.gif');
    gif2 = loadGif(p, '/test.gif');
  }

  p.setup = function () {
    // setupGif();
    dom = document.querySelector('canvas');
    console.log(dom)
  }

  p.draw = function () {
    var iter = p.frameCount % 100;
    if (gif.loaded() && gif2.loaded() && !loaded) {
        c = p.createCanvas(gif.width, gif.height);
        dom.width = gif.width;
        dom.height = gif.height;
        // console.log(c)
        len = gif.frames().length;
        order = _.range(len);
        order = _.chain(order).map((item, i) => i).shuffle().value();
        frameDelay = gif.frames()[0].delay;
        // console.log(order)
        loaded = true;
    }

    if (loaded && !stop) {
        frame = p.int(p.frameCount / frameDelay) % len;
        gif.frame(order[frame]);
        // console.log(`count: ${frame}; len: ${len}; frame: ${order[frame]}`);
        // gif.filter(filters[getRandomInt(0,3)])
        p.tint(255, getRandomInt(0, 55));    
        p.image(gif);
        
        // if (iter < 50) {
            // tint(255, getRandomInt(0, 55));
            // image(gif);
            // if (record) {
            //     outGif.addFrame(c.elt, { delay: 1, copy: true });
            // }
        p.blend(gif2, 0, 0, p.width, p.height, 0, 0, p.width, p.height, blends[getRandomInt(0, blends.length - 1)]);
        // }

    }
  }  
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default sketch;
