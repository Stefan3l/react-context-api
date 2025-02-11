import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  // Prendoi il parametro id dalla rotta parametrica
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <div className="bg-[url('../image/background-login.jpg')]  h-screen bg-cover bg-center flex justify-center items-center">
      <Link className="font-bold ml-2.5" to="/menu">
        <i className="pl-4 mr-1 fa-solid fa-arrow-left " />
        Torna al menu
      </Link>
      <div className=" container mx-auto w-2/3  card flex gap-2.5 cursor-pointer">
        <div className="flex-col p-2.5 flex-wrap">
          <h2 className="font-bold text-3xl">{product.titolo}</h2>
          <p className="my-3.5  font-medium">{product.contenuto}</p>
          <ol className="list-decimal pl-2.5 mb-10">
            {product.tags &&
              product.tags.map((tag, index) => {
                return (
                  <li className="ml-2.5" key={index}>
                    {tag}
                  </li>
                );
              })}
          </ol>
          <div className="flex">
            <h5 className="price ont-medium ">Price</h5>
            <h4>{product.price} €</h4>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <img
            src={product.immagine || "Image NOt Found"}
            alt={product.titolo}
            className="w-64 h-48 object-cover  rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
