const express = require('express');
const router = express.Router();
const { getAllRecipesController, getRecipeByIdController,updateRecipeController, deleteRecipeController } = require('../controllers/recipeController');

// GET all recipes
router.get('/recipes', getAllRecipesController);

// GET a recipe by ID
router.get('/recipes/:recipe_id', getRecipeByIdController);

// UPDATE a recipe by ID
router.put('/recipes/:recipe_id', updateRecipeController);


// DELETE a recipe by ID
router.delete('/recipes/:recipe_id', deleteRecipeController);

module.exports = router;
