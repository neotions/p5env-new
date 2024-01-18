function setup() {
    scl = 160
    createCanvas(9*scl,16*scl);
    colorMode(HSB);
    gap = width/32;
    noStroke();
    z = 0;
  }
  
  function draw() {
    background(220);
    
    for (y = 0; y < height; y += gap) {
      for (x = 0; x < width; x += gap){
        
        s1 = (cos((x * y/100) + z) + 1 / 2 );
        s2 = (sin((x * y/100) + s1) + 1 / 2 );
        
        value = noise(x + s1,y + s2)
        fill(343,value*80+10,100)
        square(x,y,gap)
      }
    }
    
    z += 0.009
    
  }