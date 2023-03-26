import Card from "../../../db/model/Card";
import dbConnect from "../../../db/connect";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "DELETE") {
    const cardToDelete = await Card.findByIdAndDelete(id);
    return res.status(200).json(cardToDelete)
  }

  if (req.method === 'PUT') {
    const cardToUpdate = await Card.findByIdAndUpdate(id, { $set: JSON.parse(req.body) });
    return res.status(200).json({ status: 'Card uptodated' });
  }
}
