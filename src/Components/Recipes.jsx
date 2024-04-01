import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import Pagination from "./Pagination";

const Recipes = () => {
  const { results: data } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(10);

  // get current recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = data.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePaginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <section className="pt-12 lg:pt-16">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center space-y-3  mb-4 md:flex-row md:space-y-0 md:justify-between ">
          <p className="text-lg md:text-xl text-center max-w-sm md:text-left lg:text-2xl lg:max-w-md">
            Start searching for your perfect recipes. So you can make a
            delicious dish 😋
          </p>

          <p className="text-base md:text-lg lg:md:text-xl text-center md:text-left ">
            <strong>{data.length}</strong> results
          </p>
        </div>
        <div className="grid   sm:grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
          {currentRecipes.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
      <Pagination
        totalRecipes={data.length}
        pageSize={recipesPerPage}
        paginate={handlePaginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export const loader = async ({ request }) => {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("search") || "spaghetti";

  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=100&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default Recipes;
