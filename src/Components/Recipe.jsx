import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { id, image, title } = recipe;
  return (
    <Link to={`recipes/${id}`} className="">
      <img src={image} alt={title} className="object-cover" />
      <div>
        <p className="mt-4 text-lg font-semibold">{title}</p>
      </div>
    </Link>
  );
};

export default Recipe;
