//canvas settings
let canvasExtraHeight = 1500
let customFrameRate = 3
let maxFade = 7
//branch creation
let maxBranchLengthLow = 25
let maxBranchLengthHigh = 50
let minRootLength = 10
let rootCount = 12
let branchIterations = 3

function setup() {
  createCanvas(windowWidth, windowHeight + canvasExtraHeight)
  background(255) // Set the background to white
  frameRate(customFrameRate)
}

function draw() {
  // Slower fading over time by increasing alpha value
  // Background with fading effect
  background(255, 255, 255, maxFade)

  strokeWeight(10) // Size of the brush
  stroke(0, 0, 0) // Black color, fully opaque
}

function mouseMoved() {
  drawRoots(mouseX, mouseY)
}
function mouseDragged() {
  drawRoots(mouseX, mouseY)
}

function drawRoots(x, y) {
  strokeWeight(0.7) // Thin lines for roots
  stroke(0) // Black color for the roots

  let numRoots = rootCount // Number of root branches
  let maxLength = random(maxBranchLengthLow, maxBranchLengthHigh) // Max length for each root branch

  for (let i = 0; i < numRoots; i++) {
    let angle = random(TWO_PI) // Random direction for each root
    let length = random(minRootLength, maxLength) // Random length for each root

    let xEnd = x + cos(angle) * length
    let yEnd = y + sin(angle) * length

    // Ensure roots stay within canvas boundaries
    xEnd = constrain(xEnd, 0, width)
    yEnd = constrain(yEnd, 0, height)

    // Draw the root
    line(x, y, xEnd, yEnd)

    // Optionally, add more branching to each root to create more detailed root-like structures
    drawBranch(xEnd, yEnd, angle, length, branchIterations) // Recursive branching
  }
}

// Recursive function to create additional branches
function drawBranch(x, y, angle, length, depth) {
  if (depth <= 0) return // Stop when depth limit is reached

  let numBranches = floor(random(2, 4)) // Number of branches per root
  let branchLength = length * random(0.5, 0.8) // Decrease branch length

  for (let i = 0; i < numBranches; i++) {
    let branchAngle = angle + random(-PI / 6, PI / 6) // Slightly randomized angle
    let xEnd = x + cos(branchAngle) * branchLength
    let yEnd = y + sin(branchAngle) * branchLength

    // Ensure branches stay within canvas boundaries
    xEnd = constrain(xEnd, 0, width)
    yEnd = constrain(yEnd, 0, height)

    // Draw the branch
    line(x, y, xEnd, yEnd)

    // Recursively add more branches to each branch
    drawBranch(xEnd, yEnd, branchAngle, branchLength, depth - 1)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight + canvasExtraHeight)
}
