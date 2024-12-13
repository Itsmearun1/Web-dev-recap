/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import "x" from 'qr-image'
inquirer
  .prompt([
    {
      type: "input", // Type of prompt (e.g., input, confirm, list, etc.)
      name: "username", // Key to store the answer
      message: "What is your name?", // Question to ask
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.username}!`);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
