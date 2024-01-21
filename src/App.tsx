import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState } from "react";

const App = () => {
  let text = "lorem ipsum dolor sit amet, adipiscing elit, ";
  let dataSet = [
    { greet: "images/1.png", description: text },
    { greet: "images/2.png", description: text },
    { greet: "images/1.png", description: text },
    { greet: "images/3.png", description: text },
    { greet: "images/2.png", description: text },
    { greet: "images/1.png", description: text },
    { greet: "images/2.png", description: text },
    { greet: "images/1.png", description: text },
    { greet: "images/1.png", description: text },
    { greet: "images/2.png", description: text },
    { greet: "images/1.png", description: text },
    { greet: "images/1.png", description: text },
  ];

  const stringDataSet = dataSet.map((data) => data.greet);
  const descriptionDataSet = dataSet.map((data) => data.description);

  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <Header
        logo="DRAMAKEY"
        children={
          <ul className="flex  gap-5">
            <li className="link " onClick={closeMenu}>
              <a href="#">Home</a>
            </li>
            <li className="link" onClick={closeMenu}>
              <a href="#">K-Drama</a>
            </li>
            <li className="link" onClick={closeMenu}>
              <a href="">C-Dramas</a>
            </li>
            <li className="link" onClick={closeMenu}>
              <a href="">How To Download</a>
            </li>
          </ul>
        }
        hamburger={
          <div className="hamburger  w-auto p-1 border-2 border-black/3 border-solid rounded">
            <span className="bar block bg-black w-xsm my-1 mx-auto h-xsm"></span>
            <span className="bar block bg-black w-xsm my-1 mx-auto h-xsm"></span>
            <span className="bar block bg-black w-xsm my-1 mx-auto h-xsm"></span>
          </div>
        }
        isActive={isActive}
        toggleMenu={toggleMenu}
      ></Header>
      <Main
        list="Drama List"
        dataSet={stringDataSet}
        description={descriptionDataSet}
      />
    </>
  );
};

export default App;
