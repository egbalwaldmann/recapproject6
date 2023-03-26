import mongoose from "mongoose";
const { Schema } = mongoose;
const cardSchema = new Schema({
  text: String,
  name: String,
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);
export default Card;
