import { createContext, useState } from "react";
import { useContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useLocalStorage([], "watched");

  const addRecipe = (newRecipe) => {
    setRecipes((recipes) => [...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        addRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
