const express = require("express");
const router = express.Router();
const generateimage = require("../controllers/openaicontrollers");

router.post('/generateimage', generateimage);
module.exports = router;