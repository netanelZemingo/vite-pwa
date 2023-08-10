import { Link } from "react-router-dom";
import { styled } from "styled-components";
import InstallPwaBtn from "./InstallPwaBtn";
import { MyRoutes } from "./MyRouter";
import Share from "./Share";
import { useState } from "react";
import { Button, Expalining } from "../pages/Styles";
import { ReactSVG } from "react-svg";
import { Subscribe } from "./Subscribe";

const Navi = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 0.5rem;
  align-items: start;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  box-shadow: 10px 6px 4px -1px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }
  align-self: center;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 20px;
`;
const UpperButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

// const Row = styled.div`
//   display: flex;
//   justify-content: center;
//
// `;

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <UpperButtons>
        <Button onClick={() => setShowMenu((s) => !s)}>
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add("svg-class-name");
              svg.setAttribute("style", "width: 20px;height:20px;");
            }}
            src="/menu.svg"
            wrapper="span"
          />
        </Button>
        <Subscribe />
      </UpperButtons>
      {showMenu && (
        <Navi>
          {/* <Row> */}
          <InstallPwaBtn />
          {!!navigator.share && <Share />}
          {/* </Row> */}
          {/* <Row> */}
          <StyledLink onClick={() => setShowMenu(false)} to={MyRoutes.chat}>
            Chat
          </StyledLink>
          {/* </Row>
          <Row> */}
          <Expalining>The basics of offline behaviors:</Expalining>
          <StyledLink onClick={() => setShowMenu(false)} to={MyRoutes.cachedAssets}>
            Cached Assets
          </StyledLink>
          <StyledLink onClick={() => setShowMenu(false)} to={MyRoutes.networkOnly}>
            Network Only
          </StyledLink>
          <StyledLink onClick={() => setShowMenu(false)} to={MyRoutes.cacheFirst}>
            Cache First
          </StyledLink>
          <StyledLink onClick={() => setShowMenu(false)} to={MyRoutes.staleWhileRevalidate}>
            Stale While Revalidate
          </StyledLink>
          {/* </Row> */}
        </Navi>
      )}
    </>
  );
};

export default NavBar;
