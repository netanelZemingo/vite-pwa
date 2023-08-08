import { Link } from "react-router-dom";
import { styled } from "styled-components";
import InstallPwaBtn from "./InstallPwaBtn";
import { MyRoutes } from "./MyRouter";
import Share from "./Share";

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
        <Link to={MyRoutes.chat}>Chat</Link>
      </Row>
      <Row>
        <p>The basics of offline behaviors:</p>
        <Link to={MyRoutes.cachedAssets}> Cached Assets </Link>
        <Link to={MyRoutes.networkOnly}> Network Only </Link>
        <Link to={MyRoutes.cacheFirst}> Cache First</Link>
        <Link to={MyRoutes.staleWhileRevalidate}> Stale While Revalidate</Link>
      </Row>
    </Navi>
  );
};

export default NavBar;
