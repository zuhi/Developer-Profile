const express = require('express');

const router = express.Router();

const developers = require('./api/developers');

router.use(express.json());

router.use("/developers",developers);

module.exports = router;
