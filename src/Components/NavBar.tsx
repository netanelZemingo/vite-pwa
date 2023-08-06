import React from "react";
import { Link } from "react-router-dom";
import InstallPwaBtn from "./InstallPwaBtn";
import Share from "./Share";
import { MyRoutes } from "./MyRouter";
import { styled } from "styled-components";

const Navi = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const NavBar = () => {
  return (
    <Navi>
      <Row>
        <InstallPwaBtn />
        {!!navigator.share && <Share />}
      </Row>
      <Row>
        <Link to={MyRoutes.networkOnly}> Network Only </Link>
        <Link to={MyRoutes.cacheFirst}> Cache First</Link>
        <Link to={MyRoutes.staleWhileRevalidate}> Stale While Revalidate</Link>
      </Row>
    </Navi>
  );
};

export default NavBar;
