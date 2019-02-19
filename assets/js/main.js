PIXI.utils.sayHello();

let application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;

let app = new application({
    width: 512,         // default: 800
    height: 512,        // default: 600
    antialias: true,    // default: false
    transparent: true, // default: false
    resolution: 1       // default: 1
});

document.getElementById('canvasdiv').appendChild(app.view);

loader
.add('imagenname','../assets/images/treasureHunter.json')
.load(setup);

let treasure;

function setup(){
   let tdungeon = TextureCache['dungeon.png'];
   let dugeon = new sprite(tdungeon);
   app.stage.addChild(dugeon);

   let tdoor = TextureCache['door.png'];
   let door = new sprite(tdoor);
   app.stage.addChild(door);
   door.x = 30;

   let texplorer= TextureCache['explorer.png'];
   let explorer = new sprite(texplorer);
   app.stage.addChild(explorer);

   explorer.x = 50;
   explorer.y = app.stage.height / 2 - explorer.height / 2;

   let ttreasure = TextureCache['treasure.png'];
   let treasure = new sprite(ttreasure);
   app.stage.addChild(treasure);

   treasure.x = 400;
   treasure.y = app.screen.height /2 - treasure.width/2;
   treasure.vx =0;
   treasure.vy = 0;

   state = play;

   app.ticker.add(delta => gameLoop());

   let nBlobs=5,
   spacing = 48,
   xOffset = 150;
   for(i = 0; i < nBlobs;i++){
    let tblob = TextureCache['blob.png'];
    let newB = new sprite(tblob);
    let x = spacing * i + xOffset;
    let y = randomNumber(0, app.stage.height - newB.height);
    newB.position.set(x,y);
    app.stage.addChild(newB);
    
   }
   function gameLoop(delta){
       state(delta)
   }
   
   function play(delta){
       treasure.vx = 1;
       treasure.x += treasure.vx;
   }
}



function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


