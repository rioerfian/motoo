export default function Footer() {
  return (
    <footer className="relative bg-white pt-12 pb-6 mt-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-lg font-semibold ">
              PT. SINERGI INFORMATIKA SEMEN INDONESIA
            </h4>
            <div className="mt-4">
              <p className="font-medium">
                Graha Aktiva, 11th Floor,
                <br />
                Jl. H.R. Rasuna Said, Kav 3, Jakarta Selatan, 12950 – Indonesia
                <br />
                <br />
                <a href="tel:+62 21 2941 0371" className="link link-hover">
                  P: +62 21 2941 0371
                </a>
                <br />
                <a href="mailto:ptsisi@sisi.sig.id" className="link link-hover">
                  E: ptsisi@sisi.sig.id
                </a>
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase  text-md font-semibold mb-4">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase  text-md font-semibold mb-4">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-sm  font-semibold py-1">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com"
                className=" hover:text-gray-900"
              >
                PT SINERGI INFORMATIKA SEMEN INDONESIA
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
