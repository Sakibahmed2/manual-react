import React from "react";
import ReactDOM from "react-dom/client";

import { anotherHello, helloWorld } from "./another";
const App = () => {
  {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "This is a fokira react app added something new",
      helloWorld(),
      anotherHello()
    );
  }
};

// const HelloWorld = () => {
//   return <h1>Hello world</h1>;
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <div>This is a fokira react app</div>
//       <HelloWorld></HelloWorld>
//     </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
