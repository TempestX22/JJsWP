let t = 0;
let balls = [];
let enemies = [];
let score = 0;
let lives = 3;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textSize(30);
  //spawns enemies at the start
  for (let i = 0; i < 5; i++) {
    let enemy = {
      x: random(0, width),
      y: random(height - 800, 0),
    };
    enemies.push(enemy);
  }
  lives = int(random(1,5));
}

function draw() {
  background(130, 130, 30);
  fill(200, 100, 0);
  //the player
  rect(mouseX, height - 50, 100, 30);
  fill(0, 100, 200);
  rect(mouseX, height - 70, 50, 30);

  //update and draw the ball

  for (let ball of balls) {
    fill(0, 0, 200);
    ball.y -= 20;
    circle(ball.x, ball.y, 10);
  }
  //Pushes enemies down at the player
  for (let enemy of enemies) {
    fill(200, 0, 0);
    enemy.y += 2;
    rect(enemy.x, enemy.y, 20);
    if (enemy.y > height) {
      enemies.splice(enemies.indexOf(enemy), 1);
      lives -= 1;
    }
  }
  //collission between enemy and ball
  for (let enemy of enemies) {
    for (let ball of balls) {
      if (dist(enemy.x, enemy.y, ball.x, ball.y) < 20) {
        enemies.splice(enemies.indexOf(enemy), 1);
        balls.splice(balls.indexOf(enemy), 1);

        let newEnemy = {
          x: random(0, width),
          y: random(height - 800, 0),
        };
        enemies.push(newEnemy);
        score += 1;
      }
    }
  }
  
  if(lives < 1)
    {
      text("Game Over", width / 2, height / 2);
      noLoop();
    }
  
  if(score === random(10,20))
    {
      text("You Win", width/2, height/2);
      noLoop();
    }
  fill(0);
  text(score, 110, 80);
  text("Score:", 20, 80);
  text("Lives:", 20, 40);
  text(lives, 100, 40);
}
//spawns a wall every click
function mousePressed() {
  let ball = {
    x: mouseX,
    y: height - 100,
  };
  balls.push(ball);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

