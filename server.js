const express = require('express');
const db = require('./data/models/recipe.js')
const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}))

server.get('/api/recipes', (req, res) => {
    
    db.getRecipes()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.get('/api/recipes/:id', (req, res) => {
    const {id} = req.params;
    db.getRecipes(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  

  server.get('/api/recipes/:id/instructions', (req, res) => {
    const {id} = req.params;
    db.getInstructions(id)
    .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

  server.get('/api/recipes/:id/shoppinglist', (req, res) => {
    const {id} = req.params;
    db.getShoppingList(id)
    .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  })

  server.get('/api/ingredients', (req, res) => {
    
    db.getIngredients()
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.get('/api/ingredients/:id', (req, res) => {
    const {id} = req.params;
    db.getIngredients(id)
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  server.get('/api/ingredients/:id/recipes', (req, res) => {
      const {id} = req.params;
      db.getIngredientList(id)
    .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  })

module.exports = server;