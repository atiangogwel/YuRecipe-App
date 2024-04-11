const pool = require('../dbConfig');

// Create the recipe table if it does not exist
const createRecipeTableQuery = `
  CREATE TABLE IF NOT EXISTS recipe (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
  )
`;

// Execute the query to create the table
pool.query(createRecipeTableQuery, (error, results) => {
  if (error) {
    console.error('Error creating recipe table:', error);
  } else {
    console.log('Recipe table created or already exists');
  }
});

const getAllRecipes = (callback) => {
  const query = 'SELECT * FROM recipe';
  pool.query(query, (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
};

// Function to delete a recipe by its ID
const deleteRecipeById = (recipeId, callback) => {
  const query = 'DELETE FROM recipe WHERE recipe_id = ?';
  pool.query(query, [recipeId], (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
};

const getRecipeById = (recipeId, callback) => {
  const query = 'SELECT * FROM recipe WHERE recipe_id = ?';
  pool.query(query, [recipeId], (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (results.length === 0) {
      callback(null, null);
      return;
    }
    callback(null, results[0]);
  });
};

const updateRecipeById = (recipeId, updatedRecipeData, callback) => {
  const { name, ingredients, instructions } = updatedRecipeData;
  const query = 'UPDATE recipe SET name = ?, ingredients = ?, instructions = ? WHERE recipe_id = ?';
  pool.query(query, [name, ingredients, instructions, recipeId], (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
};

module.exports = {
  getAllRecipes,
  deleteRecipeById,
  getRecipeById,
  updateRecipeById
};
