export default function Contact() {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-6">
      <h1 className="text-5xl md:text-7xl mt-10 font-semibold text-center md:text-left">
        Contact
      </h1>
      <div className="mt-10">
        <div className="flex flex-row flex-nowrap text-2xl md:text-3xl">
          <p className="min-w-[80px]">mail:</p>
          <p>ngtn.work[at]gmail.com</p>
        </div>
        <div className="flex flex-row flex-nowrap text-2xl md:text-3xl mt-4 md:mt-8">
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
