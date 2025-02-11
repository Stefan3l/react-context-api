import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";

// Import Button
import ButtonBookTable from "../components/ButtonBookTable";

export default function Menu() {
  const [pizzasList, setPizzasList] = useState([]);
  const { search } = useContext(SearchContext);
  const addPizzas = () => {
    axios.get("http://localhost:3001/posts").then(function (res) {
      const pizzas = res.data;
      setPizzasList(pizzas);
    });
  };

  useEffect(addPizzas, []);

  // Dato derivato dallo stato "menu"

  const menuFiltered = pizzasList.filter((pasta) =>
    pasta.titolo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="menu-page container max-w-screen-xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <ButtonBookTable>Book a Table</ButtonBookTable>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-6">
          <p className="text-white px-6 text-center pt-10 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum cumque
            assumenda dolorum perspiciatis omnis nesciunt cupiditate
            consectetur, iste, facilis deserunt modi dolor repellat numquam
            voluptates sit facere totam labore eos?
          </p>
        </div>
      </section>
      <section className="container max-w-screen-xl mx-auto py-5 bg-white">
        <div className="text-center">
          <h1 className="font-extrabold text-amber-500 text-5xl">
            Piatti Pasta
          </h1>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10 px-3.5">
          {menuFiltered.map((elm) => {
            return (
              <div key={elm.id} className="card flex gap-2.5 cursor-pointer">
                <div className="flex-col p-2.5 flex-wrap">
                  <Link to={`/menu/${elm.id}`}>
                    <h2 className="font-bold text-3xl">{elm.titolo}</h2>
                  </Link>
                  <p className="my-3.5  font-medium">{elm.contenuto}</p>
                  <ol className="list-decimal pl-2.5 mb-10">
                    {elm.tags.map((tag, index) => {
                      return (
                        <li className="ml-2.5" key={index}>
                          {tag}
                        </li>
                      );
                    })}
                  </ol>
                  <div className="">
                    <h5 className="price ont-medium ">Price</h5>
                    <h4>{elm.price} €</h4>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <p>
                    <img
                      src={elm.immagine || "Image NOt Found"}
                      alt={elm.titolo}
                      className="w-64 h-48 object-cover  rounded-xl"
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
