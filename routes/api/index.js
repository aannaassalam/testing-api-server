const router = require("express").Router();
const languageRoutes = require("./language");
const surahRoutes = require("./surah");


router.use("/language", languageRoutes);
router.use("/surah", surahRoutes);



module.exports = router;
