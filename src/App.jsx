import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Alert from "./components/Alert";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contatti from "./pages/Contatti";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./pages/SingleProduct";

// Admin Pages
import LogIn from "./pages/Admin/Login";
import Index from "./pages/Admin/Index";

//Contextx
import { AlertProvider } from "./contexts/AlertContext";

export default function App() {
  return (
    <AlertProvider>
      <Alert message="test"></Alert>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/menu" Component={Menu} />
            <Route path="/menu/:id" Component={SingleProduct} />
            <Route path="/aboutUs" Component={AboutUs} />
            <Route path="/contatti" Component={Contatti} />
          </Route>

          <Route Component={AuthLayout}>
            <Route path="/login" Component={LogIn} />
          </Route>

          <Route path="/admin" Component={DashboardLayout}>
            <Route index Component={Index} />
          </Route>
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
