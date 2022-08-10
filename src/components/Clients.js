import logoLewis from "./../assets/img/LogoLewis.png";

const Clients = () => {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-3">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Telah bekerjasama dengan :
            </h2>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a href="#" className="max-w-[120px] mx-4 py-4">
                <img src={logoLewis} className="bg-white rounded-lg p-4"></img>
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4">
                <img src={logoLewis} className="bg-white rounded-lg p-4"></img>
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4">
                <img src={logoLewis} className="bg-white rounded-lg p-4"></img>
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4">
                <img src={logoLewis} className="bg-white rounded-lg p-4"></img>
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4">
                <img src={logoLewis} className="bg-white rounded-lg p-4"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clients;
