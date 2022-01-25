const getUserScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dYc0z7DZ2wGyy9DQMplT/scores');

  const { result } = await response.json();
  return result;
};

const setUserScore = async (userScore) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dYc0z7DZ2wGyy9DQMplT/scores',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userScore),
    });

  const { result } = await response.json();
  return result;
};

export { getUserScore, setUserScore };
