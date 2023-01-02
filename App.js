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

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello heading 1 using Parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "Hello heading 2..."
);

const heading3 = React.createElement(
  "h3",
  {
    id: "heading3",
  },
  "Hello heading 3..."
);

const div = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2, heading3]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([div]);
