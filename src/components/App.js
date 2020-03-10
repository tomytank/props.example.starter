import React from "react";
//import React, { useState } from "react";
import { placesInUtah, favNumberFn } from "../data";
import DataProps from "./DataProps";
import Greeting from "./Greeting";
import PersonDescription from "./PersonDescription";

// import { placesInUtah, favNumberFn } from "../data";
// import DataProps from "./DataProps";
// import Greeting from "./Greeting";
// import PersonDescription from "./PersonDescription";

const App = () => {
  return (
    <div>
      <h1>This is our new app, tom</h1>
      <DataProps />
      <br />
      <Greeting name="Emily" />
      <PersonDescription description="Teach" favNumber={favNumberFn} />
      <br />

      <Greeting name="John" />
      <PersonDescription description="Student" favNumber={favNumberFn} />
      <br />
      <Greeting name="Scooby" />
      <PersonDescription description="TL" favNumber={favNumberFn} />
    </div>
  );
};

export default App;

// const App = () => {
//   // only using places
//   // setting initial data to placesInUtah
//   const [places, setPlaces] = useState(placesInUtah);
//   return (
//     <div>
//       <h1>This is our new app</h1>
//       <DataProps data={places} />
//       <Greeting name="Emily" newProp="testdata" />
//       {/* favNumberFn is imported in as a named import*/}
//       {/* favNumberFn is passed as a function (not executed yet)*/}
//       <PersonDescription description="Teach" favNumber={favNumberFn} />

//       <Greeting name="Don" />
//       <PersonDescription description="Student" favNumber={favNumberFn} />

//       <Greeting name="Jeannine" />
//       <PersonDescription description="TL" favNumber={favNumberFn} />
//     </div>
//   );
// };
