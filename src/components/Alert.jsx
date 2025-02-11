import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
  const { alertData, setAlertData } = useAlertContext();

  const { type, message } = alertData;

  const handleAlertClose = () => {
    setAlertData({ type: "", message: "" });
  };

  const classes = {
    info: "pb-4 bg-blue-200",
    success: "pb-4  bg-green-200",
    danger: "pb-4  bg-red-200",
  };

  if (!message) return null;
  return (
    <div className={classes[type]}>
      {message}
      <i
        className="fa-solid fa-xmark absolute right-4 top-1"
        onClick={handleAlertClose}
      ></i>
    </div>
  );
}
