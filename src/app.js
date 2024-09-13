//canvas settings
let customFrameRate = 3
let maxFade = 7
//branch creation
let maxBranchLengthLow = 25
let maxBranchLengthHigh = 50
let minRootLength = 10
let rootCount = 12
let branchIterations = 3
let branchStrokeWeight = 0.9

function setup() {
  canvasContainer = document.querySelector('.canvas-container') // Get the canvas container
  let containerWidth = canvasContainer.offsetWidth
  let containerHeight = canvasContainer.offsetHeight
  createCanvas(containerWidth, containerHeight)
  background(255) //white
  frameRate(customFrameRate)
}

function draw() {
  // Background with fading effect
  background(255, 255, 255, maxFade)
}

function mouseMoved() {
  drawRoots(mouseX, mouseY)
}
function mouseDragged() {
  drawRoots(mouseX, mouseY)
}

function drawRoots(x, y) {
  strokeWeight(branchStrokeWeight) // Thin lines for roots
  stroke(0) // Black color

  let numRoots = rootCount
  let maxLength = random(maxBranchLengthLow, maxBranchLengthHigh)

  for (let i = 0; i < numRoots; i++) {
    let angle = random(TWO_PI)
    let length = random(minRootLength, maxLength)

    let xEnd = x + cos(angle) * length
    let yEnd = y + sin(angle) * length

    // Ensure roots stay within canvas boundaries
    xEnd = constrain(xEnd, 0, width)
    yEnd = constrain(yEnd, 0, height)

    line(x, y, xEnd, yEnd)

    drawBranch(xEnd, yEnd, angle, length, branchIterations)
  }
}

function drawBranch(x, y, angle, length, depth) {
  if (depth <= 0) return

  let numBranches = floor(random(2, 4))
  let branchLength = length * random(0.5, 0.8)

  for (let i = 0; i < numBranches; i++) {
    let branchAngle = angle + random(-PI / 6, PI / 6)
    let xEnd = x + cos(branchAngle) * branchLength
    let yEnd = y + sin(branchAngle) * branchLength

    // Ensure branches stay within canvas boundaries
    xEnd = constrain(xEnd, 0, width)
    yEnd = constrain(yEnd, 0, height)

    line(x, y, xEnd, yEnd)

    drawBranch(xEnd, yEnd, branchAngle, branchLength, depth - 1)
  }
}

function windowResized() {
  canvasContainer = document.querySelector('.canvas-container') // Get the canvas container
  let containerWidth = canvasContainer.offsetWidth
  let containerHeight = canvasContainer.offsetHeight
  resizeCanvas(containerWidth, containerHeight)
}
