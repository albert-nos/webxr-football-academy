export function predictTrajectory(dir) {
  const predictedX = dir.x * 12 + Math.random() * 2; // Vector + randomness for realism
  const side = predictedX > 0 ? 3 : -3;
  document.querySelector('#keeper').setAttribute('animation', {property: 'position', to: `${side} 0 -38`, dur: 600});
  setTimeout(() => document.querySelector('#keeper').setAttribute('position', '0 0 -38'), 800);
}