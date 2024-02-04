const { readAllPokemon} = require("../models/pokemon.model")

const getAllPokemon = (req, res)=>{

   
    readAllPokemon((err,result)=>{
        if(err){
            console.log(err)
        }else if (result){
            res.json(result)
        }
    })
    console.log("get pokemons");
    


}

module.exports = {
    getAllPokemon
}