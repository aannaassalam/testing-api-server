const express = require("express");
const router = express.Router();
const Content = require("../../models/content");
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");

// get All content
router.get("/", async (req, res) => {
  try {
    const content = await (
      await Content.find()
    ).filter((content) => content.isActive === true);

    res.json(content);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});

// Add Content
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    let content = new Content({
      contentImg: result.secure_url,
      cloudinary_id: result.public_id,
      video: req.body.video,
      content: req.body.content,
    });

    // Save content
    await content.save();

    res.json(content);
  } catch (err) {
    console.log(err);
  }
});

// Delete Content
router.delete("/:id", async (req, res) => {
  try {
    // Find content by id
    let content = await Content.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(content.cloudinary_id);
    // Delete user from db
    await content.remove();
    res.json(content);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let c1 = await Content.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(c1.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      contentImg: result?.secure_url || c1.avatar,
      cloudinary_id: result?.public_id || c1.cloudinary_id,
      video: req.body.video || c1.video,
      content: req.body.content || c1.content,
    };
    c1 = await Content.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(c1);
  } catch (err) {
    console.log(err);
  }
});

// get content by id
router.get("/:id", async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.json(content);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});


module.exports = router;
