const express = require("express")

const router = express.Router();
const { getAllPokemon} = require("../controllers/pokemon.controller")

router.get("/", getAllPokemon)

module.exports = router 