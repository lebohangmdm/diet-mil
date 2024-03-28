import { IoIosTimer } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { UseGlobalContext } from "../context";

const Bookmarks = () => {
  const { recipes } = UseGlobalContext();
  console.log(recipes);
  return (
    <section className="pt-12 lg:pt-16">
      <div className=" px-4 mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {recipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="card card-compact w-[275px] mx-auto bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={recipe.image} alt={recipe.title} />
                </figure>
                <div className="p-4 ">
                  <h2 className="card-title text-lg">{recipe.title}</h2>

                  <div className="flex justify-between mt-2 mb-8">
                    <div className="flex gap-1">
                      <IoIosTimer className="text-xl" />
                      <p className="text-sm">{recipe.readyInMinutes} minutes</p>
                    </div>

                    <div className="flex gap-1">
                      <IoPeopleSharp className="text-xl " />
                      <p className="text-sm">{recipe.servings} servings</p>
                    </div>
                  </div>

                  <div className="card-actions justify-start">
                    <button className="py-2 px-4 text-white bg-greenish-2 text-lg font-medium hover:bg-greenish-1 rounded-lg">
                      View Details
                    </button>
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

export default Bookmarks;
