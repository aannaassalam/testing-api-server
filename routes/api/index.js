const router = require("express").Router();
const languageRoutes = require("./language");
const surahRoutes = require("./surah");
const ramzanTimeTableRoutes = require("./ramzanTimeTable");

router.use("/language", languageRoutes);
router.use("/surah", surahRoutes);
router.use("/ramzanTimeTable", ramzanTimeTableRoutes);

module.exports = router;
