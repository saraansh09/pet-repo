//Create variables here
var dog, happyDog, database, foodS;
var foodStock=20;
var dogImg

function preload() {
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  createCanvas(500, 500);
  dog = createSprite(400,250)
  dog.addImage(dogImg);
  dog.scale=0.3;
}

function draw() {
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  textSize(10);
  stroke("black");
  fill("white");
  text("Note:Use UP_ARROW To Feed Drago",250,50);
  text("Food Remaining: "+foodS,100,150)
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0){
    x=0;
  }else{
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  })
}



