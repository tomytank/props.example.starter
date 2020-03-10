import React from "react"; //second react is the library, first is our reference
//we put it here to get react working. Anytime we use JSX we need it.
import ReactDOM from "react-dom";
import App from "./components/App";
//import App from "./components/App";
// Call App with JSX after you import
// Any time you import a component, in that component file you must have export default
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); //JSX
