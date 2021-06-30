import React from "react";
import PropTypes from "prop-types";

import Header from "@/components/header";

const Global = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

Global.propTypes = {
  children: PropTypes.node,
};

export default Global;
