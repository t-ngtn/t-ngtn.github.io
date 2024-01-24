export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-7xl mt-10 font-semibold">About</h1>

      <div className="flex">
        <div className="flex-grow">
          <p className="text-3xl mt-10">Name: Tomoya Nagatani (t-ngtn)</p>
          <p className="text-3xl mt-10">University: The University of Tokyo</p>
          <div className="text-3xl mt-10">
            Major: Computer Science
            <ul className="list-disc ml-20 text-2xl">
              <li>Computer Architecture</li>
              <li>High-Level Synthesis</li>
              <li>Accelerator Development</li>
            </ul>
          </div>
          <p className="text-3xl mt-10">
            Interest: Low-level & Web development
          </p>
        </div>
        <div className="flex-none">
          <img
            src="images/kashiwamochi.jpg"
            alt="t-ngtn' image"
            className="rounded-full object-contain h-96 w-96"
          />
        </div>
      </div>
    </div>
  );
}
