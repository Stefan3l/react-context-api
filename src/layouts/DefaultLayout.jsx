import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchProvider } from "../contexts/SearchContext";

export default function DefaultLayout() {
  return (
    <>
      <SearchProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </SearchProvider>
    </>
  );
}
