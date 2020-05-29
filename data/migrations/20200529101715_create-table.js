exports.up = function (knex) {
    return knex.schema
      .createTable("ingredients", (tbl) => {
        tbl.increments("id");
        tbl.string("ingredient");
      })
      .createTable("recipes", (tbl) => {
        tbl.increments("id");
        tbl.string("recipe_title");
        tbl.string("instructions");
      })
      .createTable("ingredient_recipes", (tbl) => {
        tbl
          .integer("ingredient_id")
          .notNullable()
          .unsigned()
          .references("ingredients.id");
        tbl
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("recipes.id");
        //create move-to-date-field
        //create move-from-date-field
        //create an increments()
        tbl.primary(["ingredient_id", "recipe_id"]); //forces the primary key so that there can't be ingredient/recipe id mismatches    });
      });
  };
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("ingredient_recipes")
      .dropTableIfExists("recipes")
      .dropTableIfExists("ingredients");
  };