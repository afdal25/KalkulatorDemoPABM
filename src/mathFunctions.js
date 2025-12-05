export const evaluateExpression = (expression) => {
  try {
    if (/[^0-9*/.]/.test(expression)) {
      return "Error";
    }

    const result = new Function(`return ${expression}`)();
    if (!isFinite(result) || isNaN(result)) {
      return "Error";
    }

    return String(result);
  } catch (error) {
    return "Error";
  }
};

export const isOperator = (char) => {
  return ['/', '*'].includes(char);
};

export const validateInput = (currentInput, newValue) => {
  if (currentInput === '' && isOperator(newValue)) {
    return false;
  }
  if (isOperator(currentInput.slice(-1)) && isOperator(newValue)) {
    return false;
  }

  return true;
};