# Website-Qr-code-Generator

## 💡 Casual / Learning Journal Style

I built this small project while learning how Node.js works. It’s a simple Website QR Code Generator that takes a URL and turns it into a QR code.
The main goal wasn’t to make something fancy, but to understand the basics — how to set up a Node.js server,  use npm packages, and send responses.

What I learned:

- How npm packages simplify tasks like generating QR codes

- How to structure a small Node.js project

## ⚙️ Opening the Generated QR Code

In the project, the QR code image is automatically opened after it’s created.
Depending on your operating system, you’ll need to use a different command inside your Node.js script:

```
// Open the generated QR code image based on your OS

// 🪟 Windows
exec(`start ${qrPath}`);

// 🍎 macOS
exec(`open ${qrPath}`);

// 🐧 Linux
exec(`xdg-open ${qrPath}`);
```

Make sure to uncomment the command that matches your OS and comment out the others.
This tells Node.js which command to use to open the QR code file automatically.

This was a fun and quick experiment to get comfortable with the Node.js environment.
