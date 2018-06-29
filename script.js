var block = [];
var car;
var start_x;
var start_y;
var stick;
var winnerBlock;
var word;

var pressed = false;
var win = false;
var failure = false;
var added = false;

var correct = new Audio("yes.wav");
var fail = new Audio("no.wav");

var winCounter = 0;
var good = ['Good!', 'Awesome!', 'Perfect!', 'Correct!'];


function setup()
{
  var canvas = createCanvas(400, 600);
  canvas.parent('board');
  noStroke();

  car = new Car();
  stick = new Stick();
  block.push(new Block());
  block.push(new Block());
  startPos();
}

function draw()
{
  gameOver();
  background("#6d6d6d");
  score("Score: " + winCounter);

  car.draw();
  stick.draw();
  stick.update();

  var flag = false;
  for(i = 0; i<block.length; i++)
  {
    if(car.colision(block[i]) == true)
    {
      flag = true;
    }
  }

  stick.x = car.x;
  stick.y = car.y + 35;
  block[0].draw();
  block[1].draw();

  move();

  fill("#303038");
  rect(0, height - 50, width, 50);
  info();

  if(win == true || failure == true)
  {
    if(win == true)
    {
      if(added == false)
      {
        winCounter++;
        var index = floor(random(good.length));
        word = good[index];
        correct.play();

        notPlayed = false;
        added = true;
      }
      write(word);

    }
    else
    {
      write("Bad!");
    }

    if(keyIsDown(ENTER))
    {
      block.splice(0,2);
      block.push(new Block());
      block.push(new Block());

      stick = new Stick();
      win = false;
      failure = false;
      pressed = false;
      added = false;
      notPlayed = true;
      startPos();
      stick.x = car.x;
      stick.y = car.y + 35;
    }
  }
}

function info()
{
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Merriweather');
  fill(255);
  text("Press Enter to Play Again", width/2, height - 20);
}

function score(message)
{
  textSize(25);
  textAlign(RIGHT);
  textStyle(BOLD);
  textFont('Merriweather');
  fill(255);
  text(message, width - 20, 50);
}

function write(message)
{
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Merriweather');
  fill(255);
  text(message, width/2, height/2 - 70);
}

function startPos()
{
  if(block[0].x < block[1].x)
  {
    if(block[1].x - block[0].x < 50)
    {
      block[1].x += 50;
      block[0].x -=50;
    }

    start_x = block[0].x + block[0].w/2;
    start_y = block[0].y - 40;
    winnerBlock = 1;
  }
  else
  {
    if(block[0].x - block[1].x < 50)
    {
      block[1].x -= 50;
      block[0].x +=50;
    }
    start_x = block[1].x  + block[0].w/2;
    start_y = block[0].y - 40;
    winnerBlock = 0;
  }

  car.x = start_x;
  car.y = start_y;
  stick.x = start_x;
  stick.y = car.y;
}

function move()
{

  if(keyIsDown(32))
  {
    stick.add();
    pressed = true;
  }
  if(pressed == true && keyIsDown(32) == false)
  {
    stick.fall = true;
  }

}

function gameOver()
{
  if(pressed == true && keyIsDown(32) == false)
  {
    if(((stick.x + stick.w) > block[winnerBlock].x) && (stick.x + stick.w) < block[winnerBlock].x + block[winnerBlock].w)
    {
      win = true;
      block[0].win = true;
      block[1].win = true;

    }
    else
    {
      failure = true;
      block[0].fail = true;
      block[1].fail = true;
    }
  }
}
