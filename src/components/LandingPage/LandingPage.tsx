import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";

function LandingPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Header></Header>
    </>
  );
}

export default React.memo(LandingPage);
