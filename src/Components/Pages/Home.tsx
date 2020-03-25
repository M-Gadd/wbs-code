import React from "react";
import { Row } from "reactstrap";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Row className="pt-3 justify-content-center">
      <h1 style={{ color: "white" }}>Welcome</h1>
    </Row>
  );
};

export default Home;
