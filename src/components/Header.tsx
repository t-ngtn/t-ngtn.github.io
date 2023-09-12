import Link from "next/link";

const Header = () => {
  return (
    <div className="nav-container bg-gray-800 text-white p-5 shadow-lg flex justify-between items-center">
      <div className="logo text-left text-3xl font-bold">
        <Link href="/" className="hover:text-gray-400 transition duration-200">
          t-ngtn
        </Link>
      </div>
      <div className="nav-list text-right text-3xl">
        <ul className="flex justify-end">
          <li className="mr-4">
            <Link
              href="/"
              className="hover:text-gray-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/about"
              className="hover:text-gray-400 transition duration-200"
            >
              About
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/works"
              className="hover:text-gray-400 transition duration-200"
            >
              Works
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/posts"
              className="hover:text-gray-400 transition duration-200"
            >
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
