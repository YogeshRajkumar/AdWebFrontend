import React from "react";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import LogoMover from "./components/LogoMover";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />
      <LogoMover />
      <Problem />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;
