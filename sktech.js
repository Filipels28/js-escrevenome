function setup() {
  createCanvas(800, 800);
  background("black");
}

function draw() {
    stroke("red");
    fill("blue");
    
  if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35)
  }

}  
