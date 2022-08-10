const Contact = () => {
  return (
    <section id="contact" className="pt-28 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-3">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Hubungi kami
            </h2>
            <p className="font-medium text-md text-secondary">
              he standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original
            </p>
          </div>
          <form>
            <div className="lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label for="name" className="text-base text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:ring-1"
                ></input>
              </div>
              <div className="w-full px-4 mb-8">
                <label for="email" className="text-base text-primary">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:ring-1"
                ></input>
              </div>
              <div className="w-full px-4 mb-8">
                <label for="messagge" className="text-base text-primary">
                  Messagge
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="w-full h-32 bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:ring-1"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
