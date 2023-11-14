function setup() {
  createCanvas(800, 800);
  background("black");
}

function draw() {
    stroke("white");
    fill("red");
    
  if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35)
  }

}  
