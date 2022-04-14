const router = require("express").Router();
const languageRoutes = require("./language");
const surahRoutes = require("./surah");
const ramzanTimeTableRoutes = require("./ramzanTimeTable");
const contentRoutes = require("./content");
const homeRoutes = require("./home");

router.use("/language", languageRoutes);
router.use("/surah", surahRoutes);
router.use("/ramzanTimeTable", ramzanTimeTableRoutes);
router.use("/content", contentRoutes);
router.use("/home", homeRoutes);

module.exports = router;
