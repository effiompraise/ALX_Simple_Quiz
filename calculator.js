// Arithmetic functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
  
  // Attach event listeners to buttons
  document.getElementById('add').addEventListener('click', function () {
    calculateResult(add);
  });
  
  document.getElementById('subtract').addEventListener('click', function () {
    calculateResult(subtract);
  });
  
  document.getElementById('multiply').addEventListener('click', function () {
    calculateResult(multiply);
  });
  
  document.getElementById('divide').addEventListener('click', function () {
    calculateResult(divide);
  });
  
  // Function to calculate and display result
  function calculateResult(operation) {
    // Get input values
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
  
    // Perform calculation
    const result = operation(num1, num2);
  
    // Display result
    document.getElementById('calculation-result').textContent = result;
  }
  