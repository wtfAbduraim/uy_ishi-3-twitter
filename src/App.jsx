import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Context } from "./Components/Context/Theme";
import "./App.scss";

function App() {
  const { theme } = React.useContext(Context);

  return (
    <>
      <div className={`body body--${theme}`}>
      <div className="container">
        <Header />
        <hr className="span" />
        <Main />
        <hr className="span_2" />
        <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
