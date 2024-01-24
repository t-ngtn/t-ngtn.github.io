export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-7xl mt-10 font-semibold">About</h1>

      <div className="flex">
        <div className="flex-grow">
          <div className="flex text-3xl mt-10">
            <p className="min-w-[150px]">Name:</p>
            <p>Tomoya Nagatani (t-ngtn)</p>
          </div>
          <div className="flex text-3xl mt-10">
            <p className="min-w-[150px]">University:</p>
            <p>The University of Tokyo</p>
          </div>
          <div className="flex text-3xl mt-10">
            <p className="min-w-[150px]">Major:</p>
            <div>
              <p>Computer Science</p>
              <ul className="list-disc ml-10 text-2xl">
                <li>Computer Architecture</li>
                <li>High-Level Synthesis</li>
                <li>Accelerator Development</li>
              </ul>
            </div>
          </div>
          <div className="flex text-3xl mt-10">
            <p className="min-w-[150px]">Interest:</p>
            <p>Low-level & Web development</p>
          </div>
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
