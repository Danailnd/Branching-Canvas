# Branching-Canvas

### Summary
A canvas where a root-like effect is drawn on the screen as the mouse moves. The effect leaves marks that slowly fade over time. Built using p5.js.

### Features
- Real-time root-like drawing effect
- Adjustable branching and fading
- Interactive drawing triggered by mouse movement

### How to run
1. Download [p5.min.js](https://p5js.org/download/) and add it to the project root folder (the same directory as index.html)
2. Install dependencies: `npm i`
3. Start the development server: `npm run start`
4. Open `http://localhost:3000` in your browser

### Dependencies
- [p5.js](https://p5js.org/)
- [serve](https://www.npmjs.com/package/serve)

### Customizations
You can find these variables at the top of app.js:
- `canvasExtraHeight`: Adds extra height to the canvas beyond the window’s height.
- `customFrameRate` & `maxFade`: Used to control the rate at which fading occurs
-  `branchStrokeWeight`: Controls the thickness of the lines that draw branches.
-  `maxBranchLengthLow` & `maxBranchLengthHigh`: Define the range for the maximum possible length of each root system. The root length is randomly chosen between these two values, determining how large the entire root or branch structure can grow.
- `minRootLength`: Sets the minimum length of each root. For each new root, its length is randomly selected between minRootLength and the randomly chosen maximum length (based on `maxBranchLengthLow` and `maxBranchLengthHigh`)
- `branchIterations`: Controls how many levels of branching occur.
- `rootCount`: Controls how many roots are drawn at each mouse interaction

### Preview
![BrancingCanvas 2](https://github.com/user-attachments/assets/4eda4ba9-9d7d-4576-8d17-74a6785ea722)
