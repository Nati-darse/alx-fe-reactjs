import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, initializeFilteredRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    initializeFilteredRecipes: state.initializeFilteredRecipes,
  }));

  useEffect(() => {
    initializeFilteredRecipes(); // Initialize filtered recipes
  }, [recipes, initializeFilteredRecipes]);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;