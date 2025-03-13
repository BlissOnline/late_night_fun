import React from "react";
import ReactDOM from "react-dom"; // Use react-dom for older React versions
import "./index.css";
//import App from "./App"; // Your main App component
import BuzzApp from "./pages/BuzzApp";

//eact 16/17: Use ReactDOM.render instead of createRoot
ReactDOM.render(
  <React.StrictMode>
    {/* Uncomment the components you want to use */}
    {/* <FormQuizStructure /> */}
    {/* <testingPackage /> */}
    <BuzzApp />
    {/* <App /> */}
    
  </React.StrictMode>,
  document.getElementById("root") // Make sure this exists in your index.html
);


