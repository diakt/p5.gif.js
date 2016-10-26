/*
 *@ibnibraahim You need to install pkg-config. 

brew install pkg-config cairo libpng jpeg giflib
 
*/

var gif;
var gif2;
var giphy;

var outGif;
var record = true;
var onclick = true;

var dom;

function setupGif() {
    outGif = new GIF({
        workers: 2,
        quality: 40
    });

    outGif.on('finished', function(blob) {
        // var win = window.open(URL.createObjectURL(blob), "_blank");
        var formData = new FormData();
        var filename = `blob-${Date.now()}.gif`;
        formData.append('gif-blob', blob, filename);
        $.ajax({
            url: '/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                console.log('upload successful!\n' + data);
                $('body').html(`<img src="uploads/${filename}" />`)
            },
            xhr: function() {
                // create an XMLHttpRequest
                var xhr = new XMLHttpRequest();

                // listen to the 'progress' event
                xhr.upload.addEventListener('progress', function(evt) {

                    if (evt.lengthComputable) {
                        // calculate the percentage of upload completed
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);

                        // update the Bootstrap progress bar with the new percentage
                        console.log(percentComplete + '%');

                        // once the upload reaches 100%, set the progress bar text to done
                        if (percentComplete === 100) {
                            console.log('Done');
                        }
                    }

                }, false);

                return xhr;
            }
        });
        
    });
}

function preload() {
    // var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';
    // giphy = loadJSON(url);

    // console.log(giphy)
    gif2 = loadGif('200.gif');
    gif = loadGif('202.gif');
    // jpg = loadImage('code.jpg');
}

var order = [];

var c;

function setup() {
    setupGif();
    dom = document.querySelector('canvas');
    // console.log(giphy)
    // gif = loadGif(giphy.data[0].images.fixed_height.url)
}

var filters = [
    'invert',
    'threshold',
    'posterize',
    'gray',
    'erode',
    'dilate',
    'blur'
];
var blendDefault = [
    'BLEND', 
    'DARKEST', 
    'LIGHTEST', 
    'DIFFERENCE', 
    'MULTIPLY', 
    'EXCLUSION', 
    'SCREEN', 
    'REPLACE', 
    'OVERLAY', 
    'HARD_LIGHT', 
    'SOFT_LIGHT', 
    'DODGE', 
    'BURN', 
    'ADD', 
    'NORMAL'
];

var g2filter = 2;
var g2blend = 4;
console.log(blendDefault[g2blend])

var blends = blendDefault.map(mode => mode.toLowerCase())
var stop = false;
var flag;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomBlend() {

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
    var iter = frameCount % 100;
    if (gif.loaded() && gif2.loaded() && !loaded) {
        c = createCanvas(gif.width, gif.height);
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
        frame = int(frameCount / frameDelay) % len;
        
        // console.log(`count: ${frame}; len: ${len}; frame: ${order[frame]}`);
        gif.frame(order[frame]);
        gif.filter('posterize', 2)

        image(gif);
        // tint(255, getRandomInt(0, 55));    
        tint(255, getRandomInt(100, 155));
        // if (iter < 50) {
            
            // image(gif);
            if (record) {
                outGif.addFrame(c.elt, { delay: 1, copy: true });
            }
            // 3, 5, 7
            gif2.filter('posterize', 2)
            blend(gif2, 0, 0, width, height, 0, 0, width, height, 'multiply');
            tint(220, 136, 52, 16);
        // }

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
        var r = w / h;

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

function printFrame(ratio, frame, i) {
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
        console.log({ offsetLeft, offsetTop, frameWidth, frameHeight, i, len });
        gif.frame(i);
        // image(gif).filter(getRandomInt(0,3))
        image(gif, offsetLeft, offsetTop, frameWidth, frameHeight);
    }

    if (i === gif.frames().length - 1) {
        stop = true;
    }
}

function mouseMoved() {
    if (gif && gif.loaded() && !gif.playing()) {
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
