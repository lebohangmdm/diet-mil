const About = () => {
  return (
    <section className="pt-16">
      <div className="container px-4 mx-auto md:px-8">
        <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-12 lg:gap-16">
          <div className="space-y-2 md:space-y-6 md:w-[70%]">
            <h1 className="text-2xl font-semibold md:text-3xl lg:text-5xl">
              About us
            </h1>
            <div className="space-y-2 md:space-y-4 lg:max-w-xl">
              <p className="sm:text-lg ">
                <strong>Diet-Mil</strong> is here to help you cook delicious
                meals with less stress and more joy. We offer recipes and
                cooking advice for home cooks, by home cooks. Helping create
                “kitchen wins” is what we’re all about.{" "}
              </p>
              <p className="sm:text-lg">
                <strong>Diet-Mil</strong> was founded in 2003 by Elise Bauer as
                a home cooking blog to record her favorite family recipes.
                Today, Diet-Mil has grown into a trusted resource for home cooks
                with more than 3,000 tested recipes, guides, and meal plans,
                drawing over 15 million readers each month from around the world
              </p>
            </div>
          </div>
          <div className="md:w-[35%] lg:w-[40%]">
            <img src="lasagne.webp" alt="lasagne" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
