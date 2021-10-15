const express = require("express");

const { getAll, getOneById, getOneByType} = require("./controller");

const router = express.Router();

router.get("/" , getAll);

router.get("/:type", getOneByType);

router.get("/:id", getOneById);

module.exports = router;

