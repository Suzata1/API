 import multer from "multer";
 import fs from "fs";
 import path from "path";

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

const _dirname = path.resolve();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(_dirname, "uploads"));
    }
    ,
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)+"_"+file.originalname;
        cb(null, uniqueSuffix);
    },
});

const files = ["image/jpeg", "image/png", "image/gif"];
const filter = (req, file, cb) => {
    if (files.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("file type not supported"), false);
    }
};

const upload = multer({
    storage,
    fileFilter: filter,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
    }
});

export default upload;
