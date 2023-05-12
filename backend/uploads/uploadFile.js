// const multer = require("multer");
// const storage = multer({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, file, callback) => {
//     // console.log(file);
//     callback(null, `image-${Date.now()}.${file.originalname}`);
//     // callback(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const filefilter = (req, file, callback) => {
//   if (
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     callback(null, true);
//   } else {
//     callback(null, false);
//     callback(new Error("Not valid"));
//   }
// };
// const upload = multer({
//   storage: storage,
//   fileFilter: filefilter,
// });
// if (upload) {
//   console.log("upload complete");
// } else {
//   console.log("upload not complete");
// }
// module.exports = upload;

// // const multer = require("multer");

// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: function (req, file, cb) {
// //       cb(null, file.filename + "-" + Date.now() + ".jpg");
// //     },
// //   }),
// // }).single("art_file");

// // module.exports = upload;

// // const multer = require("multer");

// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: function (req, file, cb) {
// //       cb(null, "uploads");
// //     },
// //     filename: function (req, file, cb) {
// //       cb(null, file.filename + "-" + Date.now() + ".jpg");
// //     },
// //   }),
// // }).single("art_file");

// // module.exports = upload;

const multer = require("multer");
// const randomString = require("randomstring");
const path = require("path");

// filter to allow file updated or uploaded in database
const fileFilter = (req, file, cb) => {
  const allowType = /jpeg|jpg|png|gif/;
  const isMatchFile = allowType.test(
    path.extname(file.originalname).toLowerCase()
  );
  const isMimeType = allowType.test(file.mimetype);
  if (isMatchFile && isMimeType) {
    cb(null, true);
  } else {
    cb("File is not allow! please select only png,jpeg, jpg, gif");
  }
};

// storaging use with file ext
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/profile_pic");
  },
  filename: (req, file, cb) => {
    // const p1 = randomString.generate(7);
    // const p2 = randomString.generate(7);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, Date.now() + "_" + file.filename + ext);
  },
});

// return the sto limirs and filter
const getUpload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 2 },
  fileFilter: fileFilter,
}).single("profile_pic");

module.exports = getUpload;
