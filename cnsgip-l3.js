let goals = [];

function addGoal() {
  const goalInput = document.getElementById('goal-input').value;
  const timeInput = document.getElementById('time-input').value;
  const descriptionInput = document.getElementById('description-input').value;

  const goal = {
    goal: goalInput,
    time: timeInput,
    description: descriptionInput
  };

  goals.push(goal);
  displayGoals();
}

function displayGoals() {
  const goalList = document.getElementById('goal-list');
  goalList.innerHTML = '';

  goals.forEach((goal, index) => {
    const goalItem = document.createElement('div');
    goalItem.classList.add('goal-item');
    goalItem.innerHTML = `
      <h3>${goal.goal}</h3>
      <p><strong>Time:</strong> ${goal.time}</p>
      <p><strong>Description:</strong> ${goal.description}</p>
      <button onclick="removeGoal(${index})">Remove</button>
    `;
    goalList.appendChild(goalItem);
  });
}

function removeGoal(index) {
  goals.splice(index, 1);
  displayGoals();
}
