const StudentSchema = require("../models/EventCategorySchema");
const liloSchema = require("../models/student2-schema")
const stats = require("../models/stats")
function IDGenerator() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'C';
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  result += '-';
  for (let j = 0; j < 4; j++) {
    const randomDigit = Math.floor(Math.random() * 10);
    result += randomDigit;
  }
  return result;
}

function DateGenerator() {
  function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return randomNumberGenerator(1, 30) + " - " + randomNumberGenerator(1, 12) + " - " + randomNumberGenerator(2017, 2023);
}



module.exports = {
  createEventCat: async (req, res) => {
    try {
      console.log('Request Body:', req.body);  // Log the request body
      if (!req.body || !req.body.name) {
        return  res.status(400).json({error:"Invalid Data"});
      }

      const anEventCat = new StudentSchema({
        id: IDGenerator(),
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        creationDate: DateGenerator()
      });

      await anEventCat.save();
      await stats.findOneAndUpdate({}, {$inc: {categoryCreatedCount: 1}}, {upsert: true});
      res.status(200).json({ id: anEventCat.id });
    } catch (error) {
        return  res.status(400).json({error:"Invalid Data"});
    }

  },
  getAll: async function (req, res) {
    try {
      const categories = await StudentSchema.find().populate('eventsList');
      res.json(categories);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteEventCatById: async function (req, res) {
    try {
      const id = req.params.id;
      const deleteEvent = await StudentSchema.deleteOne({id: id});
      res.json(deleteEvent);
      await stats.findOneAndUpdate({}, {$inc: {categoryCreatedCount: -1}}, {upsert: true});
    } catch (error) {
      console.error(error);
      res.status(400).json({error:"Invalid Data"});
    }
  },
  updateCategoryById: async function (req, res) {
    const id = req.params.id;
    const name = req.params.name;
    const description = req.params.description;
    const updateCategory = await StudentSchema.findOneAndUpdate(
      {id},
      {$set: {name, description}},
      {new: true}
    );
    if (!updateCategory) {
      res.status(400).json({error:"Invalid Data"});
    }
    res.status(200).json({message: "Updated successfully"});
  },
  showCategoryDetail: async function (req, res) {
    const tempCat = req.params.id;
    const category = await StudentSchema.findOne({id: tempCat});
    const event = await liloSchema.find({catID : tempCat})
    res.status(200).json({event,category});
  },
};
