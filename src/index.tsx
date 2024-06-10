import React from "react";
import ReactDOM from "react-dom/client";
import HomeContainer from "./containers/HomeContainer";
import "./styles.css"
import "./tailwind.output.css"

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>
);
