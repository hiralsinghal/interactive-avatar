/* VARIABLES */
let width = 400;
let height = 400;
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(width, height);

  //sets the background color
  background(240, 248, 255);
}

/* DRAW LOOP REPEATS */
function draw() {
  rectMode(CENTER);
  angleMode(DEGREES);

  // face
  fill(253, 242, 230);
  ellipse(width/2, height/2, 175, 200);

  // hair
  noStroke();
  if (toggle == true) {
    fill(255, 182, 193);
  } else {
    fill(0,0,0);
  }
  arc(200, 130, 170, 80, 180, 0);

  // eyebrows
  fill(0,0,0);
  arc(170, 145, 30, 20, 180, 0);
  arc(230, 145, 30, 20, 180, 0);

  // eyes
  if (toggle == true) {
    //one eye closed
    fill('black');
    ellipse(170, 170, eyeWidth, eyeHeight/8);
    fill(255, 255, 255)
    ellipse(230, 170, eyeWidth, eyeHeight);
  } else if (toggle == false) {
    fill(255, 255, 255);
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);
  }
  
  // pupils
  if (toggle == true) {
    fill(0, 0, 0);
    ellipse(230, 170, pupilWidth, pupilHeight);
  } else if (toggle == false) {
    fill(0, 0, 0);
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);
  }
  
  // mouth
  if (toggle == true) {
    fill(255, 255, 255);
    arc(200, 230, 50, 50, 0,180);
  } else if (toggle == false)  {
    fill(255, 0, 0);
    arc(200, 230, 50, 50, 0, 180);

  }
  
  // text
  fill(0)
  textSize(13);
  text('Hi! I am Pink! You can change my hair colour by clicking me', 5, 20)
  // directions for mouse press
  textSize(15);
  text('Click to see me wink and smile!\nClick again to see me open them!', 150, 350)
}

// Functions
function mousePressed() {
  toggle = !toggle
}