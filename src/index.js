import './style.css';
import render from './render.js';
import { getUserScore, setUserScore } from './api.js';

const refreshBtn = document.querySelector('.refresh-btn');

const form = document.querySelector('form');

refreshBtn.addEventListener('click', async () => {
  const result = await getUserScore();
  render(result);
});

form.addEventListener('submit', async () => {
  const { userName, userScore } = form.elements;
  const game = {
    user: userName.value,
    score: userScore.value,
  };
  form.reset();
  await setUserScore(game);
});
