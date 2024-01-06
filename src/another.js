import React from "react";

export const helloWorld = () => {
  return React.createElement("p", {}, "Hello world");
};

export const anotherHello = () => {
  return React.createElement("p", {}, "Another hello");
};
