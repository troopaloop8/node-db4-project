const recipes = require("../database");

const db = require("../database.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getIngredients,
  getIngredientList
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

function getIngredients(id) {
    if (id) {
        return db("ingredients").where({ id });
      } else {
        return db("ingredients");
      }
}

function getIngredientList(ingredient_id) {
    return db("ingredient_recipes as ir")
      .where({ ingredient_id })
      .join("recipes as r", "r.id", "ir.recipe_id")
      .select("r.recipe_title");
  }
