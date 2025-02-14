// Interactive Visualizations
const logisticCanvas = document.getElementById('logistic-canvas');
const logisticCtx = logisticCanvas.getContext('2d');
const knnCanvas = document.getElementById('knn-canvas');
const knnCtx = knnCanvas.getContext('2d');
const comparisonCanvas = document.getElementById('comparison-canvas');
const comparisonCtx = comparisonCanvas.getContext('2d');

const thresholdSelect = document.getElementById('threshold');
const kValueInput = document.getElementById('k-value');

// Generate random data points
function generateData(numPoints) {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * 400;
    const y = Math.random() * 400;
    const cls = x + y > 400 ? 1 : 0; // Simple linear separation
    data.push({ x, y, class: cls });
  }
  return data;
}

const dataPoints = generateData(50);

// Draw data points
function drawDataPoints(ctx, data) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  data.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = point.class === 0 ? 'blue' : 'red';
    ctx.fill();
  });
}

// Logistic Regression Visualization
function logisticRegressionVisualization(threshold) {
  drawDataPoints(logisticCtx, dataPoints);
  logisticCtx.strokeStyle = 'green';
  logisticCtx.beginPath();
  logisticCtx.moveTo(0, logisticCanvas.height * threshold);
  logisticCtx.lineTo(logisticCanvas.width, logisticCanvas.height * threshold);
  logisticCtx.stroke();
}

// KNN Visualization
function knnVisualization(k) {
  drawDataPoints(knnCtx, dataPoints);
  // Add logic to visualize KNN (e.g., draw decision boundaries)
}

// Decision Boundary Comparison
function comparisonVisualization() {
  drawDataPoints(comparisonCtx, dataPoints);
  // Add logic to compare decision boundaries
}

// Event listeners
thresholdSelect.addEventListener('change', () => {
  logisticRegressionVisualization(parseFloat(thresholdSelect.value));
});

kValueInput.addEventListener('input', () => {
  knnVisualization(parseInt(kValueInput.value));
});

// Initial draw
logisticRegressionVisualization(0.5);
knnVisualization(3);
comparisonVisualization();

// Practice Quiz
document.getElementById('submit-quiz').addEventListener('click', () => {
  const q1Answer = document.querySelector('input[name="q1"]:checked').value;
  const q2Answer = document.querySelector('input[name="q2"]:checked').value;

  // Feedback for Q1
  const feedback1 = document.getElementById('feedback1');
  if (q1Answer === 'false') {
    feedback1.textContent = '😊 Correct! KNN is non-parametric.';
  } else {
    feedback1.textContent = '😢 Incorrect. KNN is non-parametric.';
  }

  // Feedback for Q2
  const feedback2 = document.getElementById('feedback2');
  if (q2Answer === 'true') {
    feedback2.textContent = '😊 Correct! Logistic Regression outputs probabilities.';
  } else {
    feedback2.textContent = '😢 Incorrect. Logistic Regression outputs probabilities.';
  }
});