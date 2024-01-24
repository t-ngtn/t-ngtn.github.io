export default function Contact() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-7xl mt-10 font-semibold">Contact</h1>
      <div className="mt-10">
        <div className="flex text-3xl">
          <p className="min-w-[80px]">mail:</p>
          <p>ngtn.work[at]gmail.com</p>
        </div>
        <div className="flex text-3xl mt-8">
          <p className="min-w-[80px]">X:</p>
          <a
            className="text-indigo-500 hover:text-indigo-600 visited:text-indigo-400"
            href="https://twitter.com/ngtn_t"
          >
            @ngtn_t
          </a>
        </div>
      </div>
    </div>
  );
}
