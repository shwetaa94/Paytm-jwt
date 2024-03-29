const mongoose = require("mongoose");
const { number } = require("zod");
function connectToDB() {
  try {
    mongoose.connect(
      "mongodb+srv://Shweta9416:Shwetaecommerce@cluster0.opu30dm.mongodb.net/paytm"
    );
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const User = mongoose.model("User", userSchema);

const accountSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, required: true },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  connectToDB,
  Account,
};
