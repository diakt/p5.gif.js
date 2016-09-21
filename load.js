var SuperGif = require('./supergif.js');

module.exports.loadGif = function(p5, url, cb) {
  var gif = new SuperGif({
    gif: url,
    p5inst: p5
  });

  gif.load(cb);

  var p5graphic = gif.buffer();

  p5graphic.play = gif.play;
  p5graphic.pause = gif.pause;
  p5graphic.playing = gif.get_playing;
  p5graphic.frames = gif.get_frames;
  p5graphic.totalFrames = gif.get_length;

  p5graphic.loaded = function() {
    return !gif.get_loading();
  };

  p5graphic.frame = function(num) {
    if (typeof num === 'number') {
      gif.move_to(num);
    } else {
      return gif.get_current_frame();
    }
  };

  return p5graphic;
};

module.exports.loadRawGif = function(p5, data, cb) {
  var gif = new SuperGif({
    gif: '',
    p5inst: p5
  });

  gif.load_raw(data, cb);

  var p5graphic = gif.buffer();
  p5graphic.play = gif.play;
  p5graphic.pause = gif.pause;
  p5graphic.playing = gif.get_playing;
  p5graphic.frames = gif.get_frames;
  p5graphic.totalFrames = gif.get_length;

  p5graphic.loaded = function() {
    return !gif.get_loading();
  };

  p5graphic.frame = function(num) {
    if (typeof num === 'number') {
      gif.move_to(num);
    } else {
      return gif.get_current_frame();
    }
  };

  return p5graphic;
};
