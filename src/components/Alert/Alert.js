import { useEffect } from "react";
import AlertSuccess from "./AlertSuccess";
import AlertWarning from "./AlertWarning";

const Alert = ({ alertShow, setAlertShow }) => {
  useEffect(() => {
    if (alertShow) {
      setTimeout(() => {
        setAlertShow("");
      }, 2000);
    }
  }, [alertShow]);
  const alertType = () => {
    if (alertShow)
      switch (alertShow) {
        case "duplicated":
          return <AlertWarning message={"Product is already in the cart!"} />;
        case "add":
          return <AlertSuccess message={`Product added to the cart!`} />;
        case "remove":
          return <AlertSuccess message={`Product deleted!`} />;
        default:
          break;
      }
  };
  return <div> {alertShow && alertType()}</div>;
};

export default Alert;
