/**
 * Resources:
 * learningPixi - https://github.com/kittykatattack/learningPixi#introduction
 */

import * as PIXI from 'pixi.js';
import { Sprite } from 'pixi.js';

// Main Pixi application
const app = new PIXI.Application({
    resolution: devicePixelRatio, // Resolution of device - pixel
    resizeTo: window, // Automatically resize the canvas to fit the window - app.renderer.autoResize = true;
    antialias: true, // Enable antialias
    forceCanvas: true // Force canvas drawing API
});

// Start app and bind it to body element in document
document.body.appendChild(app.view);

// Set canvas background color
app.renderer.backgroundColor = 0xCCCCCC;

// Pixi Container object http://pixijs.download/release/docs/PIXI.Container.html
app.stage;
// These tell you which area is occupied by the things you put inside this stage
app.stage.width;
app.stage.height;

// Premade instance for resource loader
const loader = PIXI.Loader.shared;
// const loader = new PIXI.Loader(); // Or create your onw

// Load resource
// loader.add('cat', './images/cat.png'); // DO not use, quite error prone
loader.add('images/cat.png');

interface  Sprites {
    cat?: Sprite;
}

let sprites: Sprites = {};

// When loader loaded resources, here's what to do with them
loader.load((loader) => {

    // Create sprite
    // sprites.cat = new PIXI.TilingSprite(resource.cat.texture); // Problem with anonymous resource
    sprites.cat = new Sprite(
        loader.resources["images/cat.png"].texture // I load the resource the way I added it, by default its path of resource
    );

    // Display sprite
    app.stage.addChild(sprites.cat);

    // app.stage.removeChild( anySprite ); // Remove sprite
    // anySprite.visible = false;
});
