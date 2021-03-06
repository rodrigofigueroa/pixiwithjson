PIXI.utils.sayHello();

let application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    container = PIXI.Container;

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
   let tdoor = TextureCache['door.png'];
   let door = new sprite(tdoor);
   app.stage.addChild(door);
   door.x = 30;

   let texplorer= TextureCache['explorer.png'];
   let explorer = new sprite(texplorer);
   app.stage.addChild(explorer);

   explorer.x = 30;
   explorer.y = app.stage.height / 2 - explorer.height / 2;
   explorer.vx = 0;
   explorer.vy = 0;

   let ttreasure = TextureCache['treasure.png'];
   let treasure = new sprite(ttreasure);
   app.stage.addChild(treasure);

   treasure.x = 400;
   treasure.y = app.screen.height /2 - treasure.width/2;
   treasure.vx =0;
   treasure.vy = 0;

   let animals = new container();
   animals.addChild(explorer);
   animals.addChild(treasure);
   app.stage.addChild(animals);
   animals.position.set(50, 64); 
   console.log(animals.toGlobal(treasure.position));
   console.log(animals.toGlobal(explorer.position));
   let left = keyboard("ArrowLeft"),
      up = keyboard("ArrowUp"),
      right = keyboard("ArrowRight"),
      down = keyboard("ArrowDown");

      left.press = () =>{
        explorer.vx += -10;
        explorer.vy += 0;
        explorer.x = explorer.vx;
        explorer.y = explorer.vy;
      }
      up.press =  () => {
        explorer.vx += 0;
        explorer.vy += -10;
        explorer.x = explorer.vx;
        explorer.y = explorer.vy;
      }
      right.press = () =>{
        explorer.vx += 10;
        explorer.vy += 0;
        explorer.x = explorer.vx;
        explorer.y = explorer.vy;
      }
      down.press = () =>{
        explorer.vx += 0;
        explorer.vy += 10;
        explorer.x = explorer.vx;
        explorer.y = explorer.vy;
      }
   let state = play;

   app.ticker.add(delta => gameLoop());

   function gameLoop(delta){
       state(delta)
   }
   function play(delta){
       explorer.x = explorer.vx;
       explorer.y = explorer.vy;
   }
}

function keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
  
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    
    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );
    
    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
    };
    
    return key;
  }

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


