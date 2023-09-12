import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl mt-10 font-semibold">Welcome to t-ngtn's page</h1>
      <h2 className="text-5xl mt-4">
        look my first post →
        <Link
          href="/posts/23091201"
          className="text-blue-500 hover:underline ml-2"
        >
          post 1
        </Link>
      </h2>
    </div>
  );
}
