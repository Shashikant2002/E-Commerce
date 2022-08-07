const ErrorHandeler = require("../utils/errorHandeler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require('../utils/sendEmail');
const crypto = require("crypto");

// Rgister a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "sampleid",
      url: "profilepicurl",
    },
  });

  sendToken(user, 201, res);
});

// Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //Chicking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandeler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandeler("Invalid Email and Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandeler("Invalid Email and Password", 401));
  }

  sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Success Full",
  });
});

// Forgot Password
exports.forgetPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandeler("User Not Found", 404));
  }
  // Get Reset Password
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your Password Reset Token is:- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then Please Ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: `E-Commerce Password Recovery`,
      message 
    });

    res.status(200).json({
      success: true,
      message: `Email Send to ${user.email} Successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandeler(error.message, 500));
  }
});

//reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

  // Creating Token hash
  const resetPasswordToken = crypto
  .createHash("sha256")
  .update(req.params.token)
  .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire:{$gt: Date.now()},
  });

  if (!user) {
    return next(new ErrorHandeler("Reset Password Token is Envalid or has been expired", 400));
  }
  if(req.body.password !== req.body.confirmPassword){
    return next(new ErrorHandeler("Password Does not match", 400));
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res);

});


//Get User Detail
exports.getUserDetails = catchAsyncErrors( async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user
  })

})