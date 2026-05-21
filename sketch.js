let stars = [];
let colors = [];

function setup() {
  createCanvas(windowWidth-1, windowHeight-1);
  angleMode(DEGREES);
  background(0, 0);
  colors = ["#C59FC9", "#d90368", "#f15156", "#f4d58d"];
}

function draw() 
{
    clear();
  for(let i = 0; i < stars.length; i++)
  {
    stars[i].display();
    stars[i].fall();
  }

  for(let i = 0; i < stars.length; i++)
  {
    if(stars[i].y > height + 20)
    {
        stars.splice(i, 1);
    }
  }
}

function mouseDragged() {
  stars.push(new Star(mouseX, mouseY));
}

function windowResized() {
  resizeCanvas(windowWidth-1, windowHeight-1);
}
