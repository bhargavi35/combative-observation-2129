import React from "react";
import gif from "../../Assest/gif/KFC_Loader.gif";
import "./loader.css";

const Loader = (hidden) => {
    
  const [isLoad, setLoad] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [isErr, setErr] = React.useState(false);

  if (hidden) {
    return null;
  }
  const fetchData = () => {
    setLoad(true);
    setErr(false);


    setTimeout(() => {
      setLoad(false);
      
    }, 2000);
  };
  const fetchDataErr = () => {
    setLoad(true);  
      setErr(false);


    setTimeout(() => {
      setLoad(false);
      setErr(true);

    }, 2000);
  };

    // return isLoad ? (
    //   <div id="loader">
    //     <img onClick={fetchData} src={gif} alt="Loading" />
    //   </div>
    //   ) :(<div>
    //       <button onClick={() => setShow((prev) => !prev)}>
    //         {show ? "Hide" : "show"}
    //       </button>
    //     </div>
    //   );

    return isLoad ? (
        <div id="loader">
        <img onClick={fetchData} src={gif} alt="Loading" />
       </div>
      ) : isErr ? (
        <div className="App">
          <h1>Something went wrong</h1>
          <button onClick={fetchDataErr}></button>
        </div>
      ) : (
        <div className="App">
          <h1>Hii</h1>
          <button onClick={fetchData}></button>
          <br />
          <br />
          <button onClick={fetchDataErr}></button>
          <br />
          <br />
          <button onClick={() => setShow((prev) => !prev)}>
            {show ? "Hide" : "show"}
          </button>
          <br />
          {show ? new Date().toLocaleString() : "Date Hidden"}
        </div>
      )
};

export default Loader;
