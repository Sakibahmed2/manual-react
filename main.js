import { helloWorld } from "./another";

const App = () => {
  {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "This is a fokira react app",
      helloWorld()
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

root.render(React.createElement(App));
