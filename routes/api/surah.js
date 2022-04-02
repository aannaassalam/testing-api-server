const express = require("express");
const router = express.Router();
const Surah = require("../../models/surah");

// get All surahs
router.get("/", async (req, res) => {
  try {
    const surahs = await (
      await Surah.find()
    ).filter((surah) => surah.isActive === true);

    res.json(surahs);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});

// get surah by id
router.get("/:id", async (req, res) => {
  try {
    const surah = await Surah.findById(req.params.id);
    res.json(surah);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});

// Add Surah
router.post("/", async (req, res) => {
  const surah = new Surah(Object.assign(req.body));

  try {
    const s1 = await surah.save();
    res.status(200).json({
      success: true,
      message: `Surah has been added successfully!`,
      surah: s1,
    });
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again...",
      });
    }
  }
});

// update surah
router.put("/:id", async (req, res) => {
  try {
    const surahId = req.params.id;
    const update = req.body;
    const query = { _id: surahId };

    await Surah.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Surah has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// delete surah by id
router.delete("/:id", async (req, res) => {
  try {
    const surahId = req.params.id;
    const update = {
      isActive: false,
    };
    const query = { _id: surahId };

    await Surah.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Surah has been deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
