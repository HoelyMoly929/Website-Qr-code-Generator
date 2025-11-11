import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { exec } from "child_process";

inquirer
  .prompt([
    {
      message: "Please type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // Ensure the folder 'qr_code' exists
    if (!fs.existsSync("./qr_code")) {
      fs.mkdirSync("./qr_code");
    }

    // Create a safe filename based on the user's URL
    const safeFileName = url
      .replace(/[^a-z0-9]/gi, "_") // replace invalid filename chars
      .substring(0, 50); // limit length to 50 chars

    const qrPath = `./qr_code/${safeFileName}.png`;

    // Generate and save QR code
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(qrPath));

    console.log(`QR code image generated at: ${qrPath}`);

    // Optionally open the file
    // exec(`start ${qrPath}`); // Windows
    exec(`open ${qrPath}`); // macOS
    // exec(`xdg-open ${qrPath}`); // Linux
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("An unexpected error occurred:", error);
    }
  });
