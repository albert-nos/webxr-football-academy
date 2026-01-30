let xp = 0, shots = [];
const goalSound = new Howl({src: ['assets/goal.mp3']});
const heatmapChart = new Chart(document.getElementById('heatmap').getContext('2d'), {type: 'scatter', data: {datasets: []}});

export function startDribble() { /* Dribble code as before */ }

export function setMode(m) { /* Mode switch */ }

export function kick(power) {
  /* Kick code, call predictTrajectory if shoot */
  shots.push({x: dir.x, y: dir.y});
  heatmapChart.data.datasets[0].data = shots;
  heatmapChart.update();
}

export function startChallenge(type) { /* Challenge setup, timers */ }

export function endChallenge(success) { /* XP update, unlocks */ }