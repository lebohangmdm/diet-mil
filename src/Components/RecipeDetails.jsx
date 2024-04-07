import { IoIosTimer } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { CiBookmarkPlus, CiBookmarkMinus } from "react-icons/ci";
import { UseGlobalContext } from "../context";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addRecipe, deleteRecipe, recipes } = UseGlobalContext();
  const {
    readyInMinutes,
    servings,
    extendedIngredients,
    title,
    image,
    analyzedInstructions,
  } = useLoaderData();
  const steps = analyzedInstructions[0].steps;
  const itExist = recipes.map((recipe) => recipe.id).includes(id);

  const newRecipe = {
    id,
    title,
    readyInMinutes,
    image,
    servings,
  };

  const handleAddItem = () => {
    addRecipe(newRecipe);
  };

  console.log(recipes);

  return (
    <section className="pt-12 lg:pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2  lg:gap-12">
          <div className="order-2 md:order-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <IoIosTimer className="text-2xl" />
                <p className="uppercase md:text-lg">{readyInMinutes} Minutes</p>
              </div>
              <div className="flex items-center gap-4">
                <IoPeopleSharp className="text-2xl md:text-lg" />
                <p className="uppercase">{servings} Serving</p>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl my-8 md:mt-12 lg:text-3xl">
              Recipe Ingredients
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 md:gap-4 mb-6 md:mb-8 lg:mb-12 ">
              {extendedIngredients.map((ingredient, i) => {
                return (
                  <p key={i} className="flex items-center gap-2 lg:text-lg">
                    <span className="inline">
                      <IoMdCheckmark className="text-greenish-1 lg:text-2xl" />
                    </span>{" "}
                    {ingredient.original}
                  </p>
                );
              })}
            </div>
            <button className="btn btn-neutral" onClick={() => navigate(-1)}>
              Back Home
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img src={image} alt={title} className="object-cover" />
              {itExist ? (
                <button
                  className="bookmark-btn absolute  left-2"
                  onClick={() => deleteRecipe(id)}
                >
                  <CiBookmarkMinus />
                </button>
              ) : (
                <button
                  className="bookmark-btn absolute left-2"
                  onClick={handleAddItem}
                >
                  <CiBookmarkPlus />
                </button>
              )}
            </div>
            <h3 className="text-2xl font-medium mt-8">{title}</h3>
            <h4 className="text-xl font-semibold my-4 ">Method</h4>
            {steps.map((step) => {
              return (
                <div key={step.number} className="flex gap-2 md:gap-4">
                  <span className="inline">{step.number}</span>
                  <p key={step.number} className="leading-7 lg:text-lg">
                    {step.step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const loader = async ({ params }) => {
  const { id } = params;

  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default RecipeDetails;
