import { CiBookmark } from "react-icons/ci";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className=" bg-green-200">
      <div className="container px-4 mx-auto md:px-8">
        <div className="flex items-center justify-between">
          <div className="navbar gap-8">
            <div className="">
              <a className="text-xl font-semibold text-greenish-1 italic cursor-pointer hover:opacity-50">
                🍴 Diet-mil
              </a>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1 flex gap-12">
                <li>
                  <a className="nav-link no-underline ">My Recipes</a>
                </li>
                <li>
                  <a className="nav-link no-underline">About Us</a>
                </li>
                <li>
                  <details className="dropdown">
                    <summary className="text-greyish-1 text-xl ">
                      Cuisines
                    </summary>
                    <ul className="py-2 shadow menu dropdown-content z-10  rounded-box rounded-t-none space-y-2 ">
                      <li>
                        <a className="menu-link">African</a>
                      </li>
                      <li>
                        <a className="menu-link">Asian</a>
                      </li>
                      <li>
                        <a className="menu-link">Italian</a>
                      </li>
                      <li>
                        <a className="menu-link">Spanish</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex items-center lg:gap-4">
            <form>
              <input
                type="text"
                placeholder="Search recipes"
                className="input input-bordered w-[250px] max-w-sm  rounded-xl outline-none focus:ring-2 focus:ring-greenish-2"
              />
            </form>
            <a href="" className="text-3xl text-greenish-1">
              <CiBookmark />
            </a>
          </div>

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
