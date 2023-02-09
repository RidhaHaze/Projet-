const { promisify } = require("util");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

const createAndSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  // Remove password
  // user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  const newUser = await User.create({ first_name, last_name, email, password });

  createAndSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "success",
      message: "Please provide email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  const correct = user && (await bcrypt.compare(password, user.password));

  if (!correct || !user) {
    return res.status(401).json({
      status: "success",
      message: "Incorrect email or password",
    });
  }

  createAndSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Get token and chack if it's exist
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "success",
      message: "You are not logged in! Please log in to get access",
    });
  }

  // 2) Verivication token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) Check if user still exists
  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(401).json({
      status: "success",
      message: "The user belonging to this token does no longer exist.",
    });
  }

  // Access to protected route
  req.user = user;
  next();
});

exports.current = async (req, res, next) => {
  // 1) Get token and chack if it's exist
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }
  if (!token) {
    return;
  }

  // 2) Verivication token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) Check if user still exists
  const user = await User.findById(decoded.id);

  if (!user) {
    return;
  }
  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "success",
        message: "You do not have permission to perform this action",
      });
    }
    next();
  };
