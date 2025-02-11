import ButtonBookTable from "../components/ButtonBookTable";
import ImageSpin from "../components/ImageSpin";

export default function HomePage() {
  return (
    <>
      <section className="home-page container max-w-screen-xl mx-auto flex items-center justify-between h-[100vh] gap-2.5">
        <div className=" w-1/2 space-y-4 pl-10 pt-80">
          <h2 className="text-white text-5xl font-bold pb-2.5">
            Enjoy Our Delicious
          </h2>
          <p className="text-white font-medium pb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            corrupti, officiis beatae vitae laudantium ut aspernatur distinctio
            dignissimos aliquam temporibus eligendi sed labore sapiente nostrum
            delectus eveniet possimus perferendis quos!
          </p>
          <ButtonBookTable>Book a table</ButtonBookTable>
        </div>
        <ImageSpin />
      </section>
      <section
        className="container max-w-screen-xl mx-auto bg-gray-200
       px-2.5 py-8"
      >
        <div className="flex flex-wrap gap-3.5 ">
          <div className="ms-card-hover flex-1 basis-1/6 p-3.5 bg-white shadow-xl">
            <img
              className="py-3"
              src="../image/master-chef.png"
              alt="master-chef"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores a commodi nihil dicta, cum minus natus sunt.
            </p>
          </div>
          <div className="ms-card-hover flex-1 basis-1/6 p-3.5 bg-white shadow-xl">
            <img
              className="py-3"
              src="../image/quality-food.png"
              alte="quality-food"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores a commodi nihil dicta, cum minus natus sunt.
            </p>
          </div>
          <div className="ms-card-hover flex-1 basis-1/6 p-3.5 bg-white shadow-xl">
            <img
              className="py-3"
              src="../image/online-order.png"
              alt="online"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores a commodi nihil dicta, cum minus natus sunt.
            </p>
          </div>
          <div className="ms-card-hover flex-1 basis-1/6 p-3.5 bg-white shadow-xl">
            <img className="py-3" src="../image/24-service.png" alt="service" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores a commodi nihil dicta, cum minus natus sunt.
            </p>
          </div>
        </div>
      </section>
      <section className="ms-form  container max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="flex-1 basis-1/2 ">
            <img src="../image/rezervare.jpg" alt="rezervare" />
          </div>
          <div className="w-full flex-1 basis-1/2 px-5 py-5">
            <h2 className="text-amber-500 text-xl font-bold mb-4">
              Reservation
            </h2>
            <h5 className="text-white  text-lg font-medium mb-5">
              Book A table Online
            </h5>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex gap-4">
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  type="text"
                  placeholder="Date & Time"
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  type="text"
                  placeholder="Number person"
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  type="text"
                  placeholder="Special Request"
                />
              </div>
              <ButtonBookTable>Book Now</ButtonBookTable>
            </form>
          </div>
        </div>
      </section>
      <section className="container max-w-screen-xl mx-auto bg-gray-200 pb-7">
        <div className="text-center pt-7">
          <h2 className="text-amber-500 font-bold text-3xl mb-2.5">
            Team Members
          </h2>
          <h4 className="font-extrabold text-xl">Our Master Chefs</h4>
        </div>
        <div className="flex flex-wrap gap-3.5 mt-5 px-2.5">
          <div className="flex-1 basis-1/6 p-3.5 bg-white">
            <img className="ms-image" src="../image/chef-1.png" alt="chef-1" />
            <h3 className="text-center mt-3.5 font-bold text-xl">Full Name</h3>
          </div>
          <div className="flex-1 basis-1/6 p-3.5 bg-white">
            <img className="ms-image" src="../image/chef-2.png" alt="chef-2" />
            <h3 className="text-center mt-3.5 font-bold text-xl">Full Name</h3>
          </div>
          <div className="flex-1 basis-1/6 p-3.5 bg-white">
            <img className="ms-image" src="../image/chef-3.png" alt="chef-3" />
            <h3 className="text-center mt-3.5 font-bold text-xl">Full Name</h3>
          </div>
          <div className="flex-1 basis-1/6 p-3.5 bg-white">
            <img className="ms-image" src="../image/chef-4.png" alt="chef-4" />
            <h3 className="text-center mt-3.5 font-bold text-xl">Full Name</h3>
          </div>
        </div>
      </section>
    </>
  );
}
