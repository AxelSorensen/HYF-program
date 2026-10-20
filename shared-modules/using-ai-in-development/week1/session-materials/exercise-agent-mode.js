// Exercise: Understanding Agent Mode

/**
 * This exercise demonstrates why agent mode can be problematic.
 * Agent mode refers to a system that acts autonomously without user oversight.
 * While it can be useful in some scenarios, it can also lead to unintended consequences.
 */

// Problem: A function that acts as an "agent" to modify an array autonomously
function agentMode(array, operation) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  if (typeof operation !== "function") {
    throw new Error("Operation must be a function");
  }

  // The agent modifies the array autonomously
  for (let i = 0; i < array.length; i++) {
    array[i] = operation(array[i]);
  }

  return array;
}

// Example usage
function main() {
  const numbers = [1, 2, 3, 4, 5];

  console.log("Original array:", numbers);

  // Agent mode in action
  try {
    const result = agentMode(numbers, (num) => num * 2);
    console.log("Modified array:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }

  console.log("Final state of the original array:", numbers);
}

main();

/**
 * Discussion Points:
 * 1. Why is agent mode problematic in this example?
 *    - The original array is modified directly, which can lead to unexpected side effects.
 * 2. How can we avoid agent mode?
 *    - Use pure functions that do not modify the input directly.
 * 3. What are the benefits of avoiding agent mode?
 *    - Predictable behavior, easier debugging, and fewer unintended consequences.
 */