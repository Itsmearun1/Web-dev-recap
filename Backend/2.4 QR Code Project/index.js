/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input", // Type of prompt (e.g., input, confirm, list, etc.)
      name: "URL", // Key to store the answer
      message: "Enter the URL?", // Question to ask
    },
  ])
  .then((answers) => {
    var qr_png = qr.image(`${answers.URL}`, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
    console.log(`QR saved`);

    fs.writeFile("URL.txt", `${answers.URL}`, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
