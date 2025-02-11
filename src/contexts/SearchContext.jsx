import { createContext, useState } from "react";

// Creo il contesto
const SearchContext = createContext();

// Creo il componente custom provider

function SearchProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchProvider, SearchContext };
