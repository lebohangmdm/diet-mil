import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const links = [
  {
    id: 1,
    link: "african",
  },
  {
    id: 2,
    link: "asian",
  },
  {
    id: 3,
    link: "european",
  },
  {
    id: 4,
    link: "italian",
  },
  {
    id: 5,
    link: "spanish",
  },
];

const Header = () => {
  return (
    <header className=" bg-green-200">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <div className="navbar gap-8">
            <div className="">
              <Link
                to={"/"}
                className="text-xl font-semibold text-greenish-1 italic cursor-pointer hover:opacity-50"
              >
                🍴 Diet-mil
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1 flex gap-12">
                <li>
                  <Link to={"bookmarks"} className="nav-link no-underline ">
                    My Recipes
                  </Link>
                </li>
                <li>
                  <Link to={"about"} className="nav-link no-underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <details className="dropdown dropdown-hover">
                    <summary className="text-greyish-1 text-xl ">
                      Cuisines
                    </summary>
                    <ul className="py-1 shadow menu dropdown-content z-10  rounded-box rounded-t-none space-y-2 ">
                      {links.map((link) => {
                        return (
                          <li key={link.id}>
                            <Link
                              to={`cuisine/${link.link}`}
                              className="menu-link"
                            >
                              {link.link}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          <SearchForm />

          <div className="dropdown dropdown-left hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
