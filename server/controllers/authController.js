import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import User from "../models/userModel.js";
import { ErrorHandler } from "../utils/error-handler.js";
import sendToken from "../utils/jwtToken.js";

// Register Controller
const register = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next(
      new ErrorHandler("Please provide all the required fields", 400)
    );
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  sendToken(user, 200, res);
});

export default { register };
