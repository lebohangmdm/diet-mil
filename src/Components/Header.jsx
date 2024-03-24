import { CiBookmark } from "react-icons/ci";

const Header = () => {
  return (
    <header className="py-8 ">
      <div className="container px-8 mx-auto">
        <div className="flex justify-between">
          <div className="navbar bg-base-100 flex gap-12">
            <div className="flex-1">
              <a className="text-xl font-semibold text-greenish-1 italic cursor-pointer hover:opacity-50">
                🍴 Diet-mil
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 flex gap-12">
                <li>
                  <a className="link ">Home</a>
                </li>
                <li>
                  <a className="link ">About Us</a>
                </li>
                <li>
                  <details>
                    <summary className="text-greyish-1 text-xl cursor-pointer">
                      Cuisines
                    </summary>
                    <ul className="py-3 px-4 rounded-t-none space-y-2 ">
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

          <div className="flex gap-4">
            <form>
              <input
                type="text"
                placeholder="Search recipes"
                className="input input-bordered w-full max-w-xs py-1 px-4 rounded-xl outline-none focus:ring-2 focus:ring-greenish-2"
              />
            </form>
            <a href="" className="text-3xl text-greenish-1">
              <CiBookmark />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// <div className="container px-4 mx-auto">
//   <div className="flex items-center">
//     <div className="flex items-center gap-8">
//       <a href="" className="text-2xl text-green-600">
//         🍽️ diet-mil
//       </a>

//       <nav className="">
//         <div className="">
//           <ul className="flex items-center gap-8">
//             <li>
//               <a>Home</a>
//             </li>
//             <li>
//               <a>About us</a>
//             </li>
//             <li>
//               <details className="dropdown">
//                 <summary className="m-1 btn">open or close</summary>
//                 <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                   <li>
//                     <a>Item 1</a>
//                   </li>
//                   <li>
//                     <a>Item 2</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//     {/* seach */}
//   </div>
// </div>
