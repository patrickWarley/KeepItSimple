import { globalCss } from "@stitches/react";
import NavBar from "./assets/components/NavBar";

function App() {

  //applying global styles
  const globalStyles = globalCss({
    '*': { margin: 0, padding: 0 }
  });
  globalStyles();

  return (
    <NavBar />
  );
}

export default App
