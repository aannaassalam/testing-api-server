const express = require("express");
const router = express.Router();
const Language = require("../../models/language");

// get All languages
router.get("/", async (req, res) => {
  try {
    const languages = await (
      await Language.find()
    ).filter((language) => language.isActive === true);

    res.json(languages);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});

// get language by id
router.get("/:id", async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    res.json(language);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});

// Add Language
router.post("/", async (req, res) => {
  const language = new Language(Object.assign(req.body));

  try {
    const l1 = await language.save();
    res.status(200).json({
      success: true,
      message: `Language has been added successfully!`,
      language: l1,
    });
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again...",
      });
    }
  }
});

// update language
router.put("/:id", async (req, res) => {
  try {
    const languageId = req.params.id;
    const update = req.body;
    const query = { _id: languageId };

    await Language.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Language has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// delete language by id
router.delete("/:id", async (req, res) => {
  try {
    const languageId = req.params.id;
    const update = {
      isActive: false,
    };
    const query = { _id: languageId };

    await Language.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Language has been deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
