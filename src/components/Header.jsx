import { NavLink } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location);
  const { search, setSearch } = useContext(SearchContext);
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10">
      <nav className="container max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
        <div>
          <h3 className="text-amber-500 font-bold text-2xl">RESTAURANT 138</h3>
        </div>
        {location.pathname === "/menu" && (
          <div className="flex items-center justify-center ">
            <input
              className="border bg-white rounded-xl w-80 p-2"
              type="search"
              placeholder="Cerca..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
        <ul className="flex space-x-6 text-white uppercase">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Pasta</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">Pizza</NavLink>
          </li>
          <li>
            <NavLink to="/contatti">Contact</NavLink>
          </li>
          <li>
            <NavLink
              className="bg-amber-500 py-1.5 px-2.5 font-bold hover:bg-amber-600"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
