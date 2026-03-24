import multer from "multer";
import fs from "fs";

// ✅ FINAL upload path (PUBLIC FOLDER)
const uploadDir = "/var/www/manux/uploads";

// make sure folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // ✅ remove spaces (important)
    const cleanName = file.originalname.replace(/\s+/g, "-");
    cb(null, Date.now() + "-" + cleanName);
  }
});

export const upload = multer({ storage });