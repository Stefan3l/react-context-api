import { useAlertContext } from "../contexts/AlertContext";
import { useEffect } from "react";

export default function Contatti() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message: "Chaiam oggi",
    });
  }, []);

  return (
    <div className="text-center ">
      <h1>Ciao</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a maxime
        fugit ipsam, expedita unde voluptate aliquid doloribus sint natus quas
        assumenda provident optio magnam, ab illo cupiditate blanditiis
        accusantium.
      </p>
    </div>
  );
}
