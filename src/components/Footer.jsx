export default function Footer() {
  return (
    <section className="section-footer container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 pb-5 pl-14">
      <div className=" rounded-lg section-footer  ">
        <h2 className="text-amber-500 font-bold">Company</h2>
        <ul className=" text-white mt-3.5 space-y-2 ">
          <li>
            <a href="About us">About us</a>
          </li>
          <li>
            <a href="Contact us">Contact us</a>
          </li>
          <li>
            <a href="Reservation">Reservation</a>
          </li>
          <li>
            <a href="Privacy Policy">Privacy Policy</a>
          </li>
          <li>
            <a href="Term & Condition">Term & Condition</a>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg section-footer ">
        <h2 className="text-amber-500 font-bold">Contact</h2>
        <ul className="text-white mt-3.5 space-y-2">
          <li>
            <a href="">
              <i className="fa-solid fa-location-dot"></i> 123 Street, Bruxelles
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-phone"></i> +03 899 4876
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-envelope"></i> info@example.com
            </a>
          </li>
          <li>
            <a className="flex gap-5 text-xl mt-3" href="">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg section-footer">
        <h2 className="text-amber-500 font-bold">Opening</h2>
        <ul className="text-white mt-3.5 space-y-2">
          <li className="uppercase font-bold">Monday - Saturday</li>
          <li>09AM - 09PM</li>
          <li className="mt-5 uppercase font-bold">Sunday</li>
          <li>10AM - 08PM</li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg section-footer">
        <h2 className="text-amber-500 font-bold">Opening</h2>
        <ul className="text-white mt-3.5 space-y-2">
          <li className="uppercase font-bold">Monday - Saturday</li>
          <li>09AM - 09PM</li>
          <li className="mt-5 uppercase font-bold">Sunday</li>
          <li>10AM - 08PM</li>
        </ul>
      </div>
    </section>
  );
}
