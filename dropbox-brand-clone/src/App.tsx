import React from "react";
import Framework from "./components/Framework";
import Logo from "./components/Logo";
import Typography from "./components/Typography";
import Color from "./components/Color";

const App: React.FC = () => {
  return (
    <Framework>
      <Logo />
      <Typography />
      <Color />
    </Framework>
  );
};

export default App;