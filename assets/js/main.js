PIXI.utils.sayHello();

let application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;

let app = new application({
    width: 96,         // default: 800
    height: 384,        // default: 600
    antialias: true,    // default: false
    transparent: true, // default: false
    resolution: 1       // default: 1
});

document.getElementById('canvasdiv').appendChild(app.view);

loader
.add('imagenname','../assets/media/json/frames.json')
.load(setup);

function setup(){

}