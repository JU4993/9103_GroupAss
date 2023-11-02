function setup() {
  //We will make the canvas the same size as the image using its properties 
  //the sample image is stored in the assets folder
  createCanvas(800,800);
  background(255);

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
    grey:   {r: 215, g: 215, b: 215},
    blue:   {r: 58,  g: 88,  b: 155},
    red:    {r: 175, g: 59,  b: 44},
    yellow: {r: 237, g: 212, b: 32}
  }

  // pick the first three of the colors
  squareColors = [colors.blue, colors.red, colors.grey]

  squares =[
    {x:63.5,  y:150,    w: 44, h: 40,     color: colors.blue},
    {x:63.5,  y:537.5,  w: 44, h: 40,     color: colors.blue},

    {x:120,   y:28,     w: 40,  h: 99.5,  color: colors.red},
    {x:120,   y:85,     w: 40,  h: 30,    color: colors.grey},
    {x:107.5, y:230,    w: 70, h: 50,     color: colors.yellow},
    {x:130,   y:245,    w: 20, h: 20,     color: colors.grey},
    {x:107.5, y:400,    w: 70, h:47.5,    color: colors.red},
    {x:107.5, y:627.5,  w: 70, h: 50,     color: colors.yellow},
    {x:130,   y:642.5,  w: 20, h: 20,     color: colors.grey},

    {x:200,   y:35.5,  w: 80,  h: 80,     color: colors.red},
    {x:220,   y:55.5,  w: 40,  h: 40,     color: colors.grey},
    {x:200,   y:115.5, w: 80,  h: 12.5,   color: colors.grey},
    {x:220,   y:362.5, w: 80,  h: 12.5,   color: colors.yellow},
    {x:220,   y:375,   w: 80,  h: 72.5,   color: colors.blue},
    {x:235,   y:400,   w: 40,  h: 35,     color: colors.yellow},
    {x:330,   y:292.5, w: 60,  h: 55,     color: colors.yellow},
    {x:330,   y:347.5, w: 60,  h: 15,     color: colors.grey},
    {x:330,   y:362.5, w: 60,  h: 15,     color: colors.yellow},
    {x:330,   y:377.5, w: 60,  h: 45,     color: colors.grey},
    {x:330,   y:422.5, w: 60,  h: 25.5,   color: colors.yellow},

    {x: 360,  y:752.5,  w:50, h:47.5,     color: colors.red},
    
    {x:500,   y:142.5, w: 80, h: 150,     color: colors.blue},
    {x:500,   y:182.5, w: 80, h: 80,      color: colors.red},
    {x:520,   y:202.5, w: 40,  h: 40,     color: colors.yellow},

    {x:550,   y: 362.5, w: 80, h: 85,     color: colors.red },
    {x:570,   y: 383.5, w: 40,  h: 40,    color: colors.grey },
    {x:550,   y:462.5, w: 80,  h: 20,     color: colors.red },
    {x:550,   y:482.5, w: 80,  h: 20,     color: colors.grey },

    {x:687.5, y:530, w:50, h: 40, color: colors.blue},
    {x:687.5, y:590, w:50, h: 40, color: colors.red},

    {x:717.5, y:75, w:55, h: 30, color:colors.blue},
    {x:702.5, y:180, w:50, h: 50, color:colors.red},
  ]

  drawLines();
  drawSquaresWithinLines();
  drawSquaresOutOfLines();
}

function draw() {
  // Commented out the draw functions here since 
  // there would be infinite loop and could not find the error
  // move these to the setup function

  // drawLines();
  // drawSquaresWithinLines();
  // drawSquaresOutOfLines();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawLines() {
  // Set the stroke weight (line thickness)
  strokeWeight(15); // Set the line thickness to 4 pixels
  // Set the line endings to sharp (SQUARE)
  strokeCap(SQUARE);
  //the default color of the line is yellow
  stroke(230,200,35); // Set the line color to yellow
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
  let columnNumbers = 12
  let rowNumbers = 11
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
      let ys = random(l.ys, l.ye-7.5);
      let color = random(squareColors);
      fill(color.r, color.g, color.b);
      rect(l.xs-7.5, ys-7.5, 15, 15);
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
      let color = random(squareColors);
      fill(color.r, color.g, color.b);
      rect(xs-7.5, l.ys-7.5, 15, 15);
    }
  }

}

function drawSquaresOutOfLines() {
  // Draw the big squares that is stick to the lines 
  // or just overlap it 

  // Initial: draw some fixed position squares
  // Might use random after finding the displine of the position of the squares

  for (let i = 0; i < squares.length; i++) {
    let s = squares[i];
    fill(s.color.r, s.color.g, s.color.b);
    rect(s.x, s.y, s.w, s.h);
  }
}