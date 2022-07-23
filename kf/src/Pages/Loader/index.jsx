import React,{useEffect} from "react";
import gif from "../../Assest/gif/KFC_Loader.gif";
import "./loader.css";
import { Link } from "react-router-dom";

const Loader = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {setIsLoading(isLoading)}, 1000);
  }, []);

  setIsLoading(true);
  return isLoading ? (
    <div id="loader">
      <img src={gif} alt="Loading" />
    </div>
  ) : isError ? (
    <div>soemthing went wrong</div>
  ) : (
    <div>
      <Link to="/"></Link>
    </div>
  );
};

export default Loader;
