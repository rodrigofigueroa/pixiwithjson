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

document.getElementById('canvasdiv').appendChild(app.view);


loader
.add('imagen','./assets/media/json/frames.json')
.on('progress', progreso)
.load(setup);

function progreso(loader, progress){
    console.log( loader.progress, progress.name);
}

function setup(){
    
    let princess, floor, clock;

    let textureFloor = TextureCache['floor.png'];
    floor = new sprite(
        textureFloor
    );
    app.stage.addChild(floor);

    let prin = new sprite(
        resources['./assets/media/json/frames.json']
    );


}