"use restrict"

const express = require("express")
const pendudukController = require('../controllers/penduduk.controller')
const router = new express.Router();

router.get("/Show", pendudukController.index)
router.post("/add", pendudukController.add)
router.delete("/delete", pendudukController.delete)
router.put("/update", pendudukController.put)

module.exports = router