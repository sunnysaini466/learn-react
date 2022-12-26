const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello heading 1..."
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
