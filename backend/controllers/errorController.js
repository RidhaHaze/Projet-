const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return res.status(400).json({
    status: "fail",
    message,
  });
};

const handleDuplicateFieldsDB = (err) => {
  const value = Object.keys(err.keyValue);
  const message = `Duplicate field value : ${value}. Please use another value!`;
  return res.status(400).json({
    status: "fail",
    message,
  });
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return res.status(400).json({
    status: "fail",
    message,
  });
};

const handleJWTError = () =>
  res.status(401).json({
    status: "fail",
    message: "Invalid Token. Please log in again.",
  });

const handleJWTExpiredError = () =>
  res.status(401).json({
    status: "fail",
    message: "Your Token. has expired! Please log in again.",
  });

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  console.log(err);

  let error = { ...err };
  error.message = err.message;
  if (err.name === "CastError") error = handleCastErrorDB(error);
  if (err.code === 11000) error = handleDuplicateFieldsDB(error);
  if (err.name === "ValidationError") error = handleValidationErrorDB(error);
  if (err.name === "JsonWebTokenError") error = handleJWTError();
  if (err.name === "TokenExpiredError") error = handleJWTExpiredError();
  return res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
};
