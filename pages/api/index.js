import dbConnect from "../../db/connect";
import Card from "../../db/model/Card";

export default async function handler(req, res) {
  await dbConnect();
  const cards = await Card.find();
  res.status(200).json(cards);
}
