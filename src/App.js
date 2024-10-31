import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Promo from "./components/Promo.js";
import Intro1 from "./components/Intro1.js";
import Intro2 from "./components/Intro2.js";
import Intro3 from "./components/Intro3.js";
import Footer from "./components/Footer.js";

import Heading from "./Heading.js";

// function Heading() {
//   let title = "This is an h1 heading";
//   return <h1>{title}</h1>;
// }

function App() {
  return (
    <div className="App">
      {/* <h1>Hello React.</h1> */}
      <Heading />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Promo />
//       <Intro1 />
//       <Intro2 />
//       <Intro3 />
//       <Footer />
//     </div>
//   );
// }

export default App;
