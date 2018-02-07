## Install

`npm i`

## Run

There must be two nodejs processes running together

1. Run API with `npm run server`
2. Run frontend dev-server with `npm start`

## How to play

1. Load the first GIF.
    1. Choose a  tag fetched from Giphy. E.g. "art".
    2. Click on one of the GIF previews to load it into the page.

2. Choose  the second GIF.
    1. Choose a  tag fetched from Giphy. E.g. "sculpture".
    2. Click on one of the GIF previews to load it into the page.

3. Now you can see two gifs running side by side.
4. Press "Play" button to start mixing.
5. In the bottom of the page you can the third GIF being generated in real-time by P5.js randomized blend & filters. Might be laggy because of high CPU consumption.
6. Wait for a while and press "Render".
7. P5.js will render a new GIF image, it will take a while. There is no indication though.
8. As soon as rendering is done, the real-time image will be replaced with generated blob.
9. Click on the blob to download the generated GIF.
