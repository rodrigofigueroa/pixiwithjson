PIXI.utils.sayHello();

let application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;

let app = new application({
    width: 1440,         // default: 800
    height: 960,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
});

document.getElementById('canvas').appendChild(app.view);

