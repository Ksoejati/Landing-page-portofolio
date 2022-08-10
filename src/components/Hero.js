import Pict from "../assets/img/Me3.png";

const HeroSection = () => {
  return (
    // Hero Section Start
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center  px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Hi Everyone <span className="text-orange-400">👋</span>,
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                I'm Tika
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Student & <span className="text-dark">Singer</span>
            </h2>
            <p className="font-medium text-secondary mb-10 loading-relaxed">
              Menyanyi itu menyenangkan bukan?
              <span className="text-dark font-bold"> Bukan!</span>
            </p>

            <a
              href="#about"
              className="text-base font-semibold text-white bg-primary py-3 px-4 
              rounded-full hover:shadow-lg hover:opacity-80 trasition duration-300 ease-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 relative lg:w-1/2">
            <div className="mt-10 lg:mt-0 lg:right-0">
              <img src={Pict} alt="tika" className="max-w-full mx-auto" />
              <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M26.3,-41.3C35.9,-40.1,46.6,-36.6,54.2,-29.3C61.8,-22,66.4,-11,70,2.1C73.7,15.3,76.5,30.5,69.8,39.3C63,48.1,46.8,50.5,33.6,49.9C20.3,49.3,10.2,45.7,0.3,45.1C-9.5,44.5,-19.1,47,-32.9,48C-46.8,49,-65.1,48.6,-72.4,40.3C-79.8,32.1,-76.2,16,-75.7,0.3C-75.1,-15.4,-77.6,-30.8,-73.3,-44.3C-69,-57.9,-57.9,-69.6,-44.6,-68.6C-31.3,-67.6,-15.6,-53.9,-3.6,-47.7C8.4,-41.4,16.8,-42.5,26.3,-41.3Z"
                    transform="translate(100 100) scale(1.0)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
