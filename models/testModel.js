import { model, models, Schema } from "mongoose";

const modelSchema = new Schema({
  name: String,
  email: String,
});

const Test = models.Test || model("Test", modelSchema);

export default Test;
