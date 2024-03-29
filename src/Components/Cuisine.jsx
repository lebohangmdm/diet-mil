import { Link, useLoaderData } from "react-router-dom";

const Cuisine = () => {
  const { results: recipes } = useLoaderData();
  console.log(recipes);

  return (
    <section className="pt-12 lg:pt-16">
      <div className=" px-4 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="w-[275px] mx-auto bg-base-100 shadow-xl overflow-hidden rounded-lg"
              >
                <figure>
                  <img src={recipe.image} alt={recipe.title} />
                </figure>

                <div className="flex flex-col justify-between pt-2 pb-12 px-4 ">
                  <div>
                    <h2 className="text-lg font-semibold mb-12">
                      {recipe.title}
                    </h2>
                  </div>

                  <div className="justify-start ">
                    <Link
                      to={`/recipes/${recipe.id}`}
                      className="py-2 px-4 text-white bg-greenish-2  rounded-lg font-medium hover:bg-greenish-1  transition-all duration-150"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const loader = async ({ params }) => {
  const { cuisine } = params;

  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    return data;
  } catch (error) {}
};

export default Cuisine;
