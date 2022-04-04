const express = require("express");
const router = express.Router();
const RamzanTimeTable = require("../../models/ramzanTimeTable");

// get All ramzan Timee Table
router.get("/", async (req, res) => {
  try {
    const ramzanTimeTable = await (
      await RamzanTimeTable.find()
    ).filter((ramzanTimeTable) => ramzanTimeTable.isActive === true);

    res.json(ramzanTimeTable);
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
});

// Add RamzanTimeTable
router.post("/", async (req, res) => {
  const ramzanTimeTable = new RamzanTimeTable(Object.assign(req.body));

  try {
    const r1 = await ramzanTimeTable.save();
    res.status(200).json({
      success: true,
      message: `RamzanTimeTable has been added successfully!`,
      ramzanTimeTable: r1,
    });
  } catch (err) {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again...",
      });
    }
  }
});

module.exports = router;
