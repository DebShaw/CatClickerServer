import Cats from "../models/cats.js";

export const addCat = async (req, res) => {
  const { catName, catImageURL, catClicks, catAge, catNicks } = req.body;
  try {
    const newCat = await Cats.create({
      catName,
      catClicks,
      catImageURL,
      catAge,
      catNicks,
    });
    res.status(200).json(newCat);
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't add a new cat");
  }
};

export const getAllCats = async (req, res) => {
  try {
    const catList = await Cats.find();
    res.status(200).json(catList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const activateCat = async (req, res) => {
  const { id: _id } = req.params;
  try {
    await Cats.updateMany({ catActive: true }, { $set: { catActive: false } });
    const activatedCat = await Cats.findByIdAndUpdate(
      _id,
      { $set: { catActive: true } },
      { new: true }
    );
    res.status(200).json(activatedCat);
  } catch (err) {
    console.log(err);
  }
};
export const incrementClicks = async (req, res) => {
  const { id: _id } = req.params;
  const { catClicks } = req.body;
  const catAge =
    catClicks <= 5
      ? "Infant"
      : catClicks <= 12
      ? "Child"
      : catClicks <= 25
      ? "Young"
      : catClicks <= 40
      ? "Middle-Age"
      : catClicks <= 60
      ? "Old"
      : "Very-Old";
  try {
    const clickedCat = await Cats.findByIdAndUpdate(
      _id,
      { $set: { catClicks: catClicks, catAge: catAge } },
      { new: true }
    );
    res.status(200).json(clickedCat);
  } catch (error) {
    console.log(error);
  }
};
export const updateCat = async (req, res) => {
  const { id: _id } = req.params;
  const { catImageURL, catClicks, catAge, catNicks } = req.body;
  try {
    const updatedCat = await Cats.findByIdAndUpdate(
      _id,
      {
        $set: {
          catImageURL: catImageURL,
          catClicks: catClicks,
          catAge: catAge,
          catNicks: catNicks,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedCat);
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't update cat");
  }
};
