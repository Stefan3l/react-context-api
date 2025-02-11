import { createContext, useState, useContext } from "react";

// Creo il contesto
const AlertContext = createContext();

// Creo il componente custom provider

function AlertProvider({ children }) {
  const [alertData, setAlertData] = useState({
    type: "info",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
}

// Definisco un hook custom per facilitare il "consumo" del contesto

function useAlertContext() {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, useAlertContext };
