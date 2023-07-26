import mongoose from "mongoose";
const CatsSchema = mongoose.Schema({
  catName: { type: String, required: "Cat must have a name" },
  catClicks: { type: Number, required: "Cat Image must be clicked" },
  catImageURL: { type: String, required: "Cat Image must have a URL" },
  catAge: { type: String, required: "Cat must have age" },
  catNicks: { type: [String] },
  catActive: { type: Boolean, default: false },
});

export default mongoose.model("Cats", CatsSchema);
