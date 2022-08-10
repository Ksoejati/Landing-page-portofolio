import RuangHijau from "../assets/img/RuangHijau.jpg";
import LewisOrganic from "../assets/img/LewisOrganic.jpg";

const PerformSchedule = () => {
  return (
    <section id="schedule" className="pt-24 pb-16 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-3">
              Performance Schedule
            </h4>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {/* Perform 1 */}
          <div className="mb-12 p-4 md:w-1/2 bg-w">
            <div className="rounded-md shadow-lg pt-5 overflow-hidden bg-white">
              <h3 className="text-center mb-3 font-semibold text-dark">
                Ruang Hijau
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-2">Every Saturday</span>
                </p>
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-2">20 pm - closed</span>
                </p>
              </h3>
              <img src={RuangHijau} className="w-full"></img>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.099931537803!2d106.6675070142795!3d-6.250561662939879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbed21e5cae9%3A0xfa78be087b9a17e9!2sRUANG%20HIJAU%20CAFE%20STUDIO!5e0!3m2!1sid!2sid!4v1659785174798!5m2!1sid!2sid"
                className="w-full h-40"
              ></iframe>
            </div>
          </div>

          {/* Perform 1 */}
          <div className="p-4 md:w-1/2">
            <div className="rounded-md shadow-lg overflow-hidden pt-5 bg-white">
              <h3 className="text-center mb-3 font-semibold  text-dark ">
                Lewi's Organic
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-2">-</span>
                </p>
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-2">-</span>
                </p>
              </h3>
              <img src={LewisOrganic} className="w-full"></img>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0844343471495!2d106.68571051427958!3d-6.252605362959265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbb658028de9%3A0x932fd7f62279ab1d!2sLewi%E2%80%99s%20Organics!5e0!3m2!1sid!2sid!4v1659788362907!5m2!1sid!2sid"
                className="w-full h-40"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformSchedule;
