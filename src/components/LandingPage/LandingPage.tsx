import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";
import Logotypes from "./Logotypes/Logotypes";

function LandingPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Logotypes></Logotypes>
    </>
  );
}

export default React.memo(LandingPage);
