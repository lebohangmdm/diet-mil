import { Form } from "react-router-dom";

const SearchForm = () => {
  return (
    <div className="hidden lg:flex items-center lg:gap-4">
      <Form method="get" action="">
        <input
          type="text"
          name="search"
          placeholder="Search recipes"
          defaultValue={"spaghetti"}
          className="input input-bordered w-[250px] max-w-sm  rounded-xl outline-none focus:ring-2 focus:ring-greenish-2"
        />
      </Form>
    </div>
  );
};

export default SearchForm;
