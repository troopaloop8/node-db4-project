const recipes = require("../database");

const db = require("../database.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes(id) {
  if (id) {
    return db("recipes").where({ id });
  } else {
    return db("recipes");
  }
}

function getShoppingList(recipe_id) {
  return db("ingredient_recipes as ir")
    .where({ recipe_id })
    .join("ingredients as i", "i.id", "ir.ingredient_id")
    .select("i.ingredient");
}

function getInstructions(id) {
  return db("recipes").where({ id }).select("instructions");
}
