import React from "react";
import "./styles/sass/main.scss";
import Header from "./components/header/header";
import Reviews from "./components/reviews/reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Reviews />
    </div>
  );
}

export default App;
