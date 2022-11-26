import mongoose from "mongoose";

const connectMongoDB = async () => {
  mongoose.connect(process.env.MONGO_URI);
};

export default connectMongoDB;
