export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-2">
      <h1 className="text-5xl md:text-7xl mt-10 font-semibold text-center md:text-left">
        About
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row text-2xl md:text-4xl mt-10">
            <p className="min-w-[150px]">Name:</p>
            <p className="ml-4 md:ml-0">Tomoya Nagatani (t-ngtn)</p>
          </div>
          <div className="flex flex-col md:flex-row text-2xl md:text-4xl mt-10">
            <p className="min-w-[150px]">Affiliation:</p>
            <p className="ml-4 md:ml-0">The University of Tokyo</p>
          </div>
          <div className="flex flex-col md:flex-row text-2xl md:text-4xl mt-10">
            <p className="min-w-[150px]">Major:</p>
            <div>
              <p className="ml-4 md:ml-0">Computer Science</p>
              <ul className="list-disc ml-10 text-lg md:text-2xl">
                <li>Computer Architecture</li>
                <li>High-Level Synthesis</li>
                <li>Accelerator Development</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-2xl md:text-4xl mt-10">
            <p className="min-w-[150px]">Interest:</p>
            <p className="ml-4 md:ml-0">Low-level & Web development</p>
          </div>
        </div>
        <div className="flex-none mt-10">
          <img
            src="images/kashiwamochi.jpg"
            alt="t-ngtn' image"
            className="rounded-full object-contain h-64 md:h-96 w-64 md:w-96 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
