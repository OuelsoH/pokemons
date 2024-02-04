const db = require("../config/db");

const readAllPokemon = (callback) => {
  const sql = `SELECT * FROM pokemon`;
  db.query(sql, (err, res) => {
    if (err) {
      // console.log(err.code, err.sqlMessage)
      callback(err, null);
    } else {
      callback(null, res);

    //   console.log("pokemons getted");
    //   console.log(result);
    }
  });
};

module.exports = {
  readAllPokemon,
};
