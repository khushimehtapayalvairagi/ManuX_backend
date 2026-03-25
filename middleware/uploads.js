import multer from "multer";
import fs from "fs";
import path from "path";

// make sure uploads folder exists
import multer from "multer";
import fs from "fs";

const uploadDir = "/var/www/manux/uploads"; // ✅ FINAL

console.log("UPLOAD PATH:", uploadDir); // 👈 DEBUG

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Saving file to:", uploadDir); // 👈 DEBUG
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/\s+/g, "-");
    cb(null, Date.now() + "-" + cleanName);
  }
});

export const upload = multer({ storage });