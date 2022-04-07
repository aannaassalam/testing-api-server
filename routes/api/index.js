const router = require("express").Router();
const languageRoutes = require("./language");
const surahRoutes = require("./surah");
const ramzanTimeTableRoutes = require("./ramzanTimeTable");
const contentRoutes = require("./content");

router.use("/language", languageRoutes);
router.use("/surah", surahRoutes);
router.use("/ramzanTimeTable", ramzanTimeTableRoutes);
router.use("/content", contentRoutes);

module.exports = router;
