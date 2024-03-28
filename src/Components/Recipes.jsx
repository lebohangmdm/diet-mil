import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = () => {
  const { results: recipes, totalResults } = useLoaderData();
  console.log(recipes);
  return (
    <section className="pt-12 lg:pt-16">
      <div className="container px-4 mx-auto md:px-6">
        <p className="text-lg md:text-xl mb-8 max-w-sm lg:text-2xl lg:max-w-md">
          Start searching for your perfect recipes. So you can make a delicious
          dish 😋
        </p>
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
    </section>
  );
};

export const loader = async () => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default Recipes;
