// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
  
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
  
    // Get feedback element
    const feedbackElement = document.getElementById('feedback');
  
    // Check if the user selected an answer
    if (!userAnswer) {
      feedbackElement.textContent = "Please select an answer.";
      return;
    }
  
    // Provide feedback
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
      feedbackElement.style.color = "red";
    }
  }
  
  // Add event listener to the button
  document.getElementById('submit-answer').addEventListener('click', checkAnswer);
  