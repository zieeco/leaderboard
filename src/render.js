const render = (arr) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  if (arr.length === 0) {
    ul.innerHTML = '<li>No Scores yet!</li>';
    return;
  }
  arr.forEach((game, index) => {
    const li = document.createElement('li');
    li.textContent = `${game.user}: ${game.score}`;
    li.id = index;
    ul.appendChild(li);
  });
};

export default render;
