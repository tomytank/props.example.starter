// first named import
export const placesInUtah = [
    "Zion National Park",
    "Arches National Park",
    "Canyonlands National Park",
    "Capital Reef National Park",
    "Bryce Canyon National Park",
    "Dead Horse State Park",
    "Coral Pink Sand Dunes State Park",
    "Dixie National Forest",
    "Antelope Island State Park"
  ];
  
  // second named import
  // oftentimes functions like these are kept in helper files (like helpers.js)
  export const favNumberFn = testStr => {
    return `Fav Number is: ${Math.random() * 100}`;
  };
  