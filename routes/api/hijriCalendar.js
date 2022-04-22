const express = require("express");
const router = express.Router();
const HijriCalendar = require("../../models/hijriCalendar");

// get All ramzan Timee Table
router.get("/", async (req, res) => {
  try {
    const hijriCalendar = await HijriCalendar.find();

    res.json(hijriCalendar);
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
  const hijriCalendar = new HijriCalendar({ days: req.body });

  try {
    const r1 = await hijriCalendar.save();
    res.status(200).json({
      success: true,
      message: `New Month added to Hijri Calendar successfully!`,
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
