import React from "react";
import PositivusLogo from "@/assets/images/logos/positivus-logo.svg?react";

function NavigationBar() {
  return (
    <>
      <PositivusLogo />
      <h1>HOLA MUNDO</h1>
    </>
  );
}

export default React.memo(NavigationBar);
