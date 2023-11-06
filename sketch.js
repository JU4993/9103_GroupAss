let music;
let level;
let fft;
let verticalSquares = []
let horizontalSquares = []

function preload() {
  music = loadSound('assets/music.mp3');
}

function setup() {
  //We will make the canvas the same size as the image using its properties 
  //the sample image is stored in the assets folder
  let cnv = createCanvas(800,800);
  cnv.mouseClicked(togglePlay);
  // Initialize music and level
  //music.play();
  level = new p5.Amplitude();
  fft = new p5.FFT();
  fft.setInput(music);
  level.setInput(music);

  
  

  // coordinate of the vertical lines
  verticalLinePositions = [
    { xs: 28,  ys: 0,   xe: 28,  ye: 300}, 
    { xs: 56,  ys: 0,   xe: 56,  ye: 800},
    { xs: 100, ys: 0,   xe: 100, ye: 800},
    { xs: 185, ys: 0,   xe: 185, ye: 800},
    { xs: 440, ys: 0,   xe: 440, ye: 800},
    { xs: 470, ys: 0,   xe: 470, ye: 800},
    { xs: 530, ys: 355, xe: 530, ye: 510},
    { xs: 680, ys: 0,   xe: 680, ye: 800},
    { xs: 710, ys: 0,   xe: 710, ye: 300},
    { xs: 745, ys: 0,   xe: 745, ye: 75 },
    { xs: 745, ys: 130, xe: 745, ye: 350},
    { xs: 745, ys: 455, xe: 745, ye: 650},
    { xs: 780, ys: 0,   xe: 780, ye: 800}
  ]

  // coordinate of the horizontal lines
  horizontalLinePositions = [
    { xs: 0,    ys: 28,   xe: 800, ye: 28},
    { xs: 0,    ys: 135,  xe: 800, ye: 135},
    { xs: 0,    ys: 300,  xe: 800, ye: 300},
    { xs: 0,    ys: 355,  xe: 800, ye: 355},
    { xs: 0,    ys: 455,  xe: 800, ye: 455},
    { xs: 0,    ys: 510,  xe: 800, ye: 510},
    { xs: 0,    ys: 555,  xe: 55,  ye: 555},
    { xs: 55,   ys: 585,  xe: 470, ye: 585},
    { xs: 680,  ys: 645,  xe: 775, ye: 645},
    { xs: 0,    ys: 680,  xe: 800, ye: 680},
    { xs: 0,    ys: 715,  xe: 55,  ye: 715},
    { xs: 0,    ys: 760,  xe: 800, ye: 760}
  ]
  
  // The main theme colors of the whole artwork
  colors = {
    grey:   {r: 237, g: 212, b: 32},
    blue:   {r: 58,  g: 88,  b: 155},
    red:    {r: 175, g: 59,  b: 44},
    yellow: {r: 210, g: 210, b: 210}
  }

  brightColors = {
    grey:   {r: 220, g: 220, b: 220},
    blue:   {r: 88, g: 118,  b: 185},
    red:    {r: 205, g: 79,  b: 64},
    yellow: {r: 255, g: 230, b: 82},
  }

  brighterColors = {
    grey: {r:235, g:235, b:235},
    blue: {r:255, g:20, b:0},
    red: {r:255, g:235, b:0},
    yellow: {r:0, g:188, b:255}
  }

  // pick the first three of the colors
  squareColors = ["blue", "red", "grey"]

  squares =[
    {x:63.5,  y:150,    w: 44, h: 40,     color: "blue"},
    {x:63.5,  y:537.5,  w: 44, h: 40,     color: "blue"},
    {x:120,   y:28,     w: 40,  h: 99.5,  color: "red" },
    {x:120,   y:85,     w: 40,  h: 30,    color: "grey"},
    {x:107.5, y:230,    w: 70, h: 50,     color: "yellow"},
    {x:130,   y:245,    w: 20, h: 20,     color: "grey"},
    {x:107.5, y:400,    w: 70, h:47.5,    color: "red"},
    {x:107.5, y:627.5,  w: 70, h: 50,     color: "yellow"},
    {x:130,   y:642.5,  w: 20, h: 20,     color: "grey"},
    {x:200,   y:35.5,  w: 80,  h: 80,     color: "red"},
    {x:220,   y:55.5,  w: 40,  h: 40,     color: "grey"},
    {x:200,   y:115.5, w: 80,  h: 12.5,   color: "grey"},
    {x:220,   y:362.5, w: 80,  h: 12.5,   color: "yellow"},
    {x:220,   y:375,   w: 80,  h: 72.5,   color: "blue"},
    {x:235,   y:400,   w: 40,  h: 35,     color: "yellow"},
    {x:330,   y:292.5, w: 60,  h: 55,     color: "yellow"},
    {x:330,   y:347.5, w: 60,  h: 15,     color: "grey"},
    {x:330,   y:362.5, w: 60,  h: 15,     color: "yellow"},
    {x:330,   y:377.5, w: 60,  h: 45,     color: "grey"},
    {x:330,   y:422.5, w: 60,  h: 25.5,   color: "yellow"},
    {x: 360,  y:752.5,  w:50, h:47.5,     color: "red"},
    {x:500,   y:142.5, w: 80, h: 150,     color: "blue"},
    {x:500,   y:182.5, w: 80, h: 80,      color: "red"},
    {x:520,   y:202.5, w: 40,  h: 40,     color: "yellow"},
    {x:550,   y: 362.5, w: 80, h: 85,     color: "red"},
    {x:570,   y: 383.5, w: 40,  h: 40,    color: "grey"},
    {x:550,   y:462.5, w: 80,  h: 20,     color: "red"},
    {x:550,   y:482.5, w: 80,  h: 20,     color: "grey"},
    {x:687.5, y:530, w:50, h: 40,         color: "blue"},
    {x:687.5, y:590, w:50, h: 40,         color: "red"},
    {x:717.5, y:75, w:55, h: 30,          color: "blue"},
    {x:702.5, y:180, w:50, h: 50,         color: "red"},
  ]

  //drawLines();
  drawSquaresWithinLines();
  //drawSquaresOutOfLines();
}

function draw() {
  background(255);
  let currentLevel = level.getLevel();
  let spectrum = fft.analyze();
  let currentTime = music.currentTime();

  let currentColors = brightColors;

  if (currentTime > 47 && currentTime < 82) {
    currentColors = colors;
  } else if (currentTime > 82) {
    currentColors = brighterColors;
  } 

  drawLines(currentColors);
  
  strokeWeight(0);
  stroke(0);

  for (let i = 0; i < verticalSquares.length; i ++) {
    let square = verticalSquares[i]
    let r = currentColors[square.color].r
    let g = currentColors[square.color].g
    let b = currentColors[square.color].b
    let index = int(map(i, 0, verticalSquares.length, 0, spectrum.length - 1))
    let range = map(spectrum[index], 0, 255, 0, 400);
    fill(r, g, b);
    rect(square.x, square.y -range, square.size, square.size);
  }

  for (let square of horizontalSquares) {
    let r = currentColors[square.color].r
    let g = currentColors[square.color].g
    let b = currentColors[square.color].b
    fill(r, g, b);
    rect(square.x, square.y, square.size, square.size);
  }

  for (let i = 0; i < squares.length; i++) {
    let s = squares[i];
    let sizeMultiplier = 1 + currentLevel; // Adjust the multiplier as needed
    let r = currentColors[s.color].r
    let g = currentColors[s.color].g
    let b = currentColors[s.color].b
    fill(r, g, b);
    rect(s.x, s.y, s.w * sizeMultiplier, s.h * sizeMultiplier);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawLines(currentColors) {
  // Set the stroke weight (line thickness)
  strokeWeight(15); // Set the line thickness to 4 pixels
  // Set the line endings to sharp (SQUARE)
  strokeCap(SQUARE);
  //the default color of the line is yellow
  stroke(currentColors["yellow"].r,currentColors["yellow"].g,currentColors["yellow"].b ); // Set the line color to yellow
  // Draw vertical lines
  for (let i = 0; i < verticalLinePositions.length; i++) {
    let l = verticalLinePositions[i];
    line(l.xs, l.ys, l.xe, l.ye);
  }
  // Draw horizontal lines
  for (let i = 0; i < horizontalLinePositions.length; i++) {
    let l = horizontalLinePositions[i];
    line(l.xs, l.ys, l.xe, l.ye);
  }
}

function drawSquaresWithinLines() {
  // Draw squares up on the lines based on the positions of the lines
  // the square will also have a width of 15 which is the same as the stroke weight
  // and use random to generate the coordinate of the square
  // the color of the square will be random chosen from the squareColors array
  strokeWeight(0);
  stroke(0);
  let columnNumbers = 13
  let rowNumbers = 12
  //draw random numbers of the square on vertical lines
  for (let i = 0; i < columnNumbers; i++) {
    let l = verticalLinePositions[i];

    // make the number of squares equal to the height of 
    // the vertical lines divided by the number of 
    let len = l.ye - l.ys;
    var squareNumbers = 0;
    if (len > 500) {
      squareNumbers = random(15, 20)
    } else if (len > 300) {
      squareNumbers = random(10, 15)
    } else if (len > 100) {
      squareNumbers = random(5, 10)
    } else {
      squareNumbers = random(1, 5)
    }
    for (let j = 0; j < squareNumbers; j++) {
      // generate the random y coordinate for the square
      // make sure its less than the end of the line
      //let ys = random(l.ys, l.ye-7.5);
      verticalSquares.push({x: l.xs-7.5, y: l.ye - j *15, color: random(squareColors), size: 15});
      //fill(color.r, color.g, color.b);
      //rect(l.xs-7.5, ys-7.5, 15, 15);
    }
  }

  //draw random numbers of the square on horizontal lines
  for (let i = 0; i < rowNumbers; i++) {
    let l = horizontalLinePositions[i];

    // make the number of squares equal to the width of 
    // the horizontal lines divided by the number of 
    
    // draw many squares when the line is long
    // and draw less if the line is short
    let len = l.xe - l.xs;
    var squareNumbers = 0;
    if (len > 500) {
      squareNumbers = random(15, 20)
    } else if (len > 300) {
      squareNumbers = random(10, 15)
    } else if (len > 100) {
      squareNumbers = random(5, 10)
    } else {
      squareNumbers = random(1, 5)
    }

    for (let j = 0; j < squareNumbers; j++) {
      //generate the random x coordinate for the square
      // make sure its less than the end of the line
      let xs = random(l.xs, l.xe-7.5);
      horizontalSquares.push({x: xs-7.5, y: l.ys-7.5, color: random(squareColors), size: 15})
      //let color = random(squareColors);
      //fill(color.r, color.g, color.b);
      //rect(xs-7.5, l.ys-7.5, 15, 15);
    }
  }

}

function drawSquaresOutOfLines() {
  // Draw the big squares that is stick to the lines 
  // or just overlap it 

  //for (let i = 0; i < squares.length; i++) {
  //  let s = squares[i];
  //  fill(s.color.r, s.color.g, s.color.b);
  //  rect(s.x, s.y, s.w, s.h);
  //}
}

function togglePlay() {
  if (music.isPlaying() ){
    music.pause();
  } else {
    music.play()
		level = new p5.Amplitude();
		level.setInput(music);
  }
}