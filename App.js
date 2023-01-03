/**
 * HMR - Hot Module Replacement
 * File Watcher Algo (written in c++)
 * Building
 * Minify
 * Clean our code
 * Dev and Production build
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older versions of browser
 * Port Number
 * Zero Config
 *
 * (Transitive Dependencies)
 */
import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const heading = (
    <h1 id="title1" key="heading1" className="heading2">
      Hello, React JS.
    </h1>
);

//Components

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <h3>Hello World, I am learning React Js</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
