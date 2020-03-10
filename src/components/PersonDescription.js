import React from "react";

const PersonDescription = props => {
  return (
    <div>
      <h2>{props.description}</h2>
      <span>{props.favNumber()}</span>
    </div>
  );
};

export default PersonDescription;

// import React from "react";

// const PersonDescription = props => {
//   // props is an object with 2 key/values sent from
//   // <PersonDescription description="Teach" favNumber={favNumberFn} /> in App.js
//   // can execute favNumber with parameters here.
//   return (
//     <div>
//       <h2>{props.description}</h2>
//       <span>{props.favNumber("a test str value")}</span>
//     </div>
//   );
// };

// export default PersonDescription;
