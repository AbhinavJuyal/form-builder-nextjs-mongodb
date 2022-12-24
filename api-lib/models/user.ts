import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUserModel extends mongoose.Model<IUser> {
  comparePassword: (
    candidatePassword: string,
    dbPassword: string,
    cb: (err: Error | null, isMatch?: boolean) => void
  ) => void;
}

const userSchema = new mongoose.Schema<IUser, IUserModel>(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [8, "Password must be at least 8 characters"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  // hash password if it's new or modified.
  if (!user.isModified()) return next();

  // generate salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) throw new Error(err.message);
    // hash the password with new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) throw new Error(err.message);
      // saving hash as the password
      user.password = hash;
      next();
    });
  });
});

//compare password
userSchema.statics.comparePassword = function (
  candidatePassword: string,
  dbPassword: string,
  cb: (err: Error | null, isMatch?: boolean) => void
) {
  bcrypt.compare(candidatePassword, dbPassword, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User =
  mongoose.models.User || mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;
