const express = require("express");

const router = express.Router();
// single or array? -Mejor array --> index.html-  Separado de users?
router.put("/:id", multer.array("gallery"), async (req, res) => {
  try {
    resizeBy.status(200).json(req.file);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
