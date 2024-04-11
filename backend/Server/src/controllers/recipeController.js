const { getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } = require('../Queries/recipeQuery');

// Controller function to handle fetching all recipes
const getAllRecipesController = (req, res) => {
  getAllRecipes((error, results) => {
    if (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
};

// Controller function to delete a recipe by ID
const deleteRecipeController = (req, res) => {
    const recipeId = req.params.recipe_id;
    deleteRecipeById(recipeId, (error, results) => {
      if (error) {
        console.error("Error deleting recipe:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ message: `Recipe with ID ${recipeId} not found` });
        return;
      }
      res.json({ message: `Recipe with ID ${recipeId} deleted successfully` });
    });
  };
  

// Controller function to fetch a recipe by ID
const getRecipeByIdController = (req, res) => {
    const recipeId = req.params.recipe_id;
    getRecipeById(recipeId, (error, result) => {
      if (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (!result) {
        res.status(404).json({ message: `Recipe with ID ${recipeId} not found` });
        return;
      }
      res.json(result);
    });
  };
// Controller function to update a recipe by ID
const updateRecipeController = (req, res) => {
    const recipeId = req.params.recipe_id;
    const updatedRecipeData = req.body;
    
    updateRecipeById(recipeId, updatedRecipeData, (error, results) => {
      if (error) {
        console.error("Error updating recipe:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ message: `Recipe with ID ${recipeId} not found` });
        return;
      }
      res.json({ message: `Recipe with ID ${recipeId} updated successfully` });
    });
  };
module.exports = {
  getAllRecipesController,
  deleteRecipeController,
  getRecipeByIdController,
  updateRecipeController
};
