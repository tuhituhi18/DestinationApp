const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes // json data
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app //html route
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../public/build/index.html"));
});

module.exports = router;
