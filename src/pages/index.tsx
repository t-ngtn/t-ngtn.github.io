export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-3xl md:text-6xl mt-10 font-semibold text-center text-slate-800 ">
        Welcome to t-ngtn page
      </h1>
      <img
        src="/images/kashiwamochi.jpg"
        className="mx-auto mt-20 rounded-full w-48 h-48 md:w-1/3 md:h-1/3"
        alt="Kashiwamochi"
      />
    </div>
  );
}
