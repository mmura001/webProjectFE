import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./Routes";
import NavBar from "./NavBar/NavBar";
import Footer from "component/Footer/Footer";
import { Helmet } from "react-helmet";

// const customPropsControlledByAttacker = {
//   dangerouslySetInnerHTML: {
//     _html: "<img onerror = 'alert(\"Hacked!\");'src=inavelid-image' />",
//   },
// };

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WikiLibrary</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `You are here: ${decodeURIComponent(document.location)}`,
        }}
      /> */}
      <NavBar />
      <Routes style={{ height: "100vh" }} />
      <Footer />
    </div>
  );
}

export default App;
