import React from "react";

const Greeting = props => {
  console.log("Props In Greeting", props);
  //return <div>Welcome {props.name}</div>;
  return <h1>{`Welcome ${props.name}`}</h1>;
};

export default Greeting;
// import React from "react";

// const Greeting = props => {
//   // props is an object
//   // key/value pairs in the object are passed like <Greeting name="Emily" />
//   console.log("Props In Greeting", props);
//   const welcomeMsg = `Welcome ${props.name}`;
//   return <h1>{welcomeMsg}</h1>;
// };

// export default Greeting;
