import React from "react";

import Navbar from "./Navbar";
import Cta0800 from "./Cta0800";
import Footer from "./Footer";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        {props.children}
        <Cta0800 />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default Layout;
