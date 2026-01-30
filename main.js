import { startDribble, setMode, kick } from './challenges.js';
import { predictTrajectory } from './ai.js';

const scene = document.querySelector('a-scene');
const ball = document.querySelector('#ball');
const rig = document.querySelector('#rig');
const goalTrigger = document.querySelector('#goal-trigger');

// Event Listeners (Kick, Goal, etc.)
window.addEventListener('click', () => kick(mode === 'shoot' ? 28 : 18));
window.addEventListener('contextmenu', e => { e.preventDefault(); kick(22); });
goalTrigger.addEventListener('collide', e => {
  if (e.detail.body.el.id === 'ball') {
    // Score logic, sound play, reset
  }
});

// Init Game
scene.addEventListener('loaded', () => {
  document.getElementById('ui').classList.add('show');
  startDribble(); // Default
});