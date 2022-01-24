const render = (arr) => {
  const container = document.querySelector('ul');
  arr.forEach((game, index) => {
    const li = document.createElement('li');
    li.textContent = `${game.user}: ${game.score}`;
    li.id = index;
    container.appendChild(li);
  });
};

export default render;
