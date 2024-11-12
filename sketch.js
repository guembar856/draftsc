function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    
    
    stroke("blue");
    fill("black");
     
    //cosole.log(mouseIsPressed);
  
    
    if (mouseIsPressed) {
     rect(mouseX, mouseY, 030, 075);
      
        }
  }