import React, { Fragment } from "react";
import styled from "@emotion/styled";
// layout
import Appbar from "./Appbar";
import Footer from "./Footer";

const Main = styled.main`
  min-height: 90vh;
`;

export default function BaseLayout({ ...props }) {
  return (
    <Fragment>
      <Appbar />
      <div style={{ height: "5.55rem" }}></div>
      <Main {...props} />
      <Footer />
    </Fragment>
  );
}
