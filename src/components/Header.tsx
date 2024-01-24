import Link from "next/link";

const Header = () => {
  return (
    <div className="nav-container bg-gray-30 text-black p-10 flex justify-between items-center">
      <div className="logo text-left text-3xl font-bold">
        <Link href="/" className="hover:text-gray-400 transition duration-200">
          t-ngtn
        </Link>
      </div>
      <div className="nav-list text-right text-3xl text-slate-800">
        <ul className="flex justify-end">
          {/* <li className="mr-4">
              <Link
                href="/"
                className="hover:text-gray-400 transition duration-200"
              >
                Home
              </Link>
            </li> */}
          <li className="mr-6">
            <Link
              href="/about"
              className="hover:text-gray-400 transition duration-200"
            >
              about
            </Link>
          </li>
          {/* <li className="mr-6">
            <Link
              href="/works"
              className="hover:text-gray-400 transition duration-200"
            >
              works
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/posts"
              className="hover:text-gray-400 transition duration-200"
            >
              blog
            </Link>
          </li> */}
          <li className="mr-6">
            <Link
              href="/contact"
              className="hover:text-gray-400 transition duration-200"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
