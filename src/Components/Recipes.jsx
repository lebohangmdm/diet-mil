import React from "react";

const Recipes = () => {
  return (
    <section className="pt-10">
      <div className="container px-4 mx-auto md:px-8">
        <p className="text-lg md:text-xl mb-8 max-w-sm lg:text-2xl lg:max-w-md">
          Start searching for your perfect recipes. So you can make a delicious
          dish 😋
        </p>
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          <div className="">
            <img src="lasagne.webp" alt={"lasagne"} className="object-cover" />
            <div>
              <p className="mt-4 text-xl font-semibold">{"lasagne"}</p>
            </div>
          </div>
          <div>
            <img
              src="lasagne.webp"
              alt={"lasagne"}
              className=" object-cover "
            />
            <p className="mt-4 text-xl font-semibold">{"lasagne"}</p>
          </div>
          <div>
            <img src="lasagne.webp" alt={"lasagne"} className="object-cover " />
            <p className="mt-4 text-xl font-semibold">{"lasagne"}</p>
          </div>
          <div>
            <img src="lasagne.webp" alt={"lasagne"} className=" object-cover" />
            <p className="mt-4 text-xl font-semibold">{"lasagne"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
