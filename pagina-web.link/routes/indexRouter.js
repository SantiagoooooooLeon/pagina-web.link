const express = require("express");
const router = express.Router();

//requiero el controlador
const indexController = require ("../controllers/indexController");

router.get("/",indexController.index)

router.get("/equipo",indexController.equipo)

//exporto la ruta
module.exports = router;