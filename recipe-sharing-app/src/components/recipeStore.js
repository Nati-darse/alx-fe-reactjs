import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set(state => {
    // Update the search term and filter recipes
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),
  filteredRecipes: [],
  initializeFilteredRecipes: () => set(state => ({
    filteredRecipes: state.recipes // Initialize filtered recipes
  })),
}));

export default useRecipeStore;