import React from "react";

import Archives from "./archives/Archives";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Works from "./works/Works";

const Main = () => {
  return (
    <>
      <Home />
      <Works />
      <Skills />
      <Archives />
    </>
  );
};

export default Main;
