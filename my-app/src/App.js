import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="header">
      <Header />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  )
}

export default App;

