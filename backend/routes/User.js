const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/current", authController.current);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);

// Protect all routes after this middleware
router.use(authController.protect);
router
  .route("/:id")
  .put(userController.uploadUserPhoto, userController.updateUser);

// Restrict to admin
router.route("/:id").delete(userController.deleteUser);
router.route("/").post(userController.addUser);
router.use(authController.restrictTo("admin"));

module.exports = router;
