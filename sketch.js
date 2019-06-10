// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

var s;
var scl = 20;
var cnv;
var food;
var badFood;
var cnv;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}
function setup() {
    cnv = createCanvas(600, 600);
    cnv.parent('canvas');
    centerCanvas();
    cnv.parent('canvas');
    s = new Snake();
    frameRate(10);
    pickLocation();
    pickLocationOfBadFood();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function pickLocationOfBadFood(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    badFood = createVector(floor(random(cols)), floor(random(rows)));
    badFood.mult(scl);
}


function mousePressed() {
    s.total++;
}


function draw() {
    background(51);
    var result = s.eat(food, false);
    if (result ==true) {
        pickLocation();
    }
    var result2 = s.eat(badFood,true);
    s.death();
    if(result2 == true){
        pickLocationOfBadFood();
    }else{
        var score = s.update();
        var thisScore = document.getElementById("score");

    }
    s.show();


    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    fill('rgb(0,255,0)');
    rect(badFood.x,badFood.y,scl,scl);
}





function keyPressed() {
    if (keyCode === UP_ARROW) {
        if(s.getDir()[1] == 0){
            s.dir(0, -1);
        }
    } else if (keyCode === DOWN_ARROW) {
        if(s.getDir()[1] == 0) {
            s.dir(0, 1);
        }
    } else if (keyCode === RIGHT_ARROW) {
        if(s.getDir()[0] == 0) {
            s.dir(1, 0);
        }
    } else if (keyCode === LEFT_ARROW) {
        if(s.getDir()[0] == 0) {
            s.dir(-1, 0);
        }
    }
}
