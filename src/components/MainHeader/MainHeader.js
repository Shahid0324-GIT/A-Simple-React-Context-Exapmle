import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../Context/auth-context";

const MainHeader = (props) => {
  const context = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={context.onLogOut} />
    </header>
  );
};

export default MainHeader;
