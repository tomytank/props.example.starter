import React from "react";

const DataProps = () => {
  return <div>Data props component from DataProps.js</div>;
};

export default DataProps;

/* Or the above can be wriiten as: 
export default function DataProps () {
  return <div>Data props component</div>
}
*/

//'default' keywords sends everything in this file, no explicit data selection with Curly braces!
// import React from "react";

// export default function DataProps(props) {
//   console.log(props);
//   // props.data => returns and array of strings
//   // we use .map so that we can transform the string into <li>
//   // use index as a unique key for list item in react: https://reactjs.org/docs/lists-and-keys.html
//   return (
//     <div>
//       <h3>List of utah places</h3>
//       <ul>
//         {props.data.map((place, index) => (
//           <li key={index}>{place}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
