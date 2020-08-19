import React from "react";

import Navbar from "./Navbar";
import Cta0800 from "./Cta0800";
import Footer from "./Footer";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Cta0800 />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
