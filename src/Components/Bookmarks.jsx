const Bookmarks = () => {
  return (
    <section className="pt-12 lg:pt-16">
      <div className="container px-4 mx-auto md:px-8">
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;
