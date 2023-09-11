import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="nav-container bg-gray-800 text-white p-4 rounded-md shadow-lg">
        <div className="logo text-center text-2xl font-bold">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-200"
          >
            t-ngtn
          </Link>
        </div>
      </div>
      <h1 className="text-4xl mt-10 font-semibold">Home</h1>
      <h2 className="text-2xl mt-4">
        welcome to
        <Link href="/posts/001" className="text-blue-500 hover:underline ml-2">
          001
        </Link>
      </h2>
    </div>
  );
}
