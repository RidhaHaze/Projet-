const multer = require("multer");

const User = require("../models/User");

const multerStorage = multer.diskStorage({
  destination: "./client/public/users",
  filename: (req, file, cb) => {
    cb(null, `user-${req.user.id}-${Date.now()}.jpeg`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        status: "success",
        message: "Not an image! Please upload only images.",
      },
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("photo");

// exports.addUser = async (req, res) => {
//   const { name, email, age } = req.body;
//   try {
//     const found = await User.findOne({ email });
//     if (found) {
//       return res.status(400).send("User already exists!!");
//     }
//     const user = new User({
//       name,
//       email,
//       age,
//     });
//     await user.save();
//     res.status(201).send({ msg: "User created", user });
//   } catch (error) {
//     res.status(500).send("server error");
//   }
// };

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "all Users", users });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).send("User deleted...");
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  req.body.photo = req.file?.filename;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "User updated", updateUser });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};
