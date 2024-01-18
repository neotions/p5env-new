let z = 0;

function setup() {
  createCanvas(100, 100, WEBGL);
  pixelDensity(1); // Ensure pixel density is 1 for accurate pixel manipulation
}

function draw() {
  loadPixels(); // Load the pixel data of the canvas into the pixels[] array

  let maxRadius = sqrt(sq(width / 2) + sq(height / 2));
  
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {

      // Calculate the index in the pixel array
      let index = (i + j * width) * 4;

      // Normalize x, y to range between -1 and 1
      let x = (i - width / 2) / (width / 2);
      let y = (j - height / 2) / (height / 2);
      
      // Convert to polar coordinates
      let angle = atan2(y, x);
      let radius = sqrt(x * x + y * y);

      // Map radius back to pixel range
      radius = map(radius, 0, 1, 0, maxRadius);

      // Calculate the color components
      let r = ((sin(angle * 3 + z) + 1) / 2) * (255 - radius * 0.1) % 255;
      let g = ((cos(radius * 0.01 + z) + 1) / 2) * (255 - radius * 0.05) % 255;
      let b = ((sin(angle * 5 + z) + cos(radius * 0.02 + z) + 2) / 4) * 255 % 255;

      // Set the pixels on the canvas
      pixels[index] = r; // Red
      pixels[index + 1] = g; // Green
      pixels[index + 2] = b; // Blue
      pixels[index + 3] = 255; // Alpha (opacity)
    }
  }

  updatePixels(); // Update the canvas with the pixel[] array data
  
  // Increment z slightly on each frame to animate the pattern over time
  z += 0.03; // Adjust this value to change the speed of the animation
}