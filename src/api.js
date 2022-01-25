const getUserScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/166tll3CLk1QzxL0tLc0/scores');

  const { result } = await response.json();
  return result;
};

const setUserScore = async (userScore) => {
  console.log('I don taya ma guy', userScore);
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/166tll3CLk1QzxL0tLc0/scores',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userScore),
    });

  const { result } = await response.json();
  return result;
};

export { getUserScore, setUserScore };
