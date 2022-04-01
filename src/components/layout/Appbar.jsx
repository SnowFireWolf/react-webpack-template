import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { LinkButton } from "@/components/base/Buttons";
import MenuButton from "./styled/MenuButton";

const AppBar = styled.div`
  height: 4.457rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  backdrop-filter: saturate(106%) blur(50px);
  background-color: rgba(255, 255, 255, 0.72);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 5%);
  cursor: pointer;
`;

const FixedAppBar = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const AppName = styled.div`
  margin-left: 1.2rem;
  font-size: 2.456rem;
  color: #707070;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 0px) and (max-width: 920px) {
    display: none;
  }
`;

const Link = styled(LinkButton)``;

const MobileMenuButton = styled(MenuButton)`
  @media (min-width: 920px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  width: 300px;
  height: 100vh;
  // margin: 100vh 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  animation-name: slideIn;
  animation-duration: 0.5s;
  @keyframes slideIn {
    from {
      transform: translate(-100%, 0);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }
    to {
      transform: translate(0, 0);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }
  }
`;

const MenuOpenedBackground = styled.div`
  height: 100vh;
  width: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  backdrop-filter: saturate(106%) blur(50px);
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  display: none;
  &.active {
    display: block;
  }
`;

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <FixedAppBar>
      <AppName onClick={() => navigate("/")}>FINANCE</AppName>

      <Links>
        <Link href="/">首頁</Link>

        <Link href="/components">組件測試</Link>

        <Link href="/member">會員</Link>
      </Links>

      <MobileMenuButton
        onClick={() => handleMenuOpen()}
        className={isMenuOpen ? "active" : undefined}
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      <MenuOpenedBackground
        onClick={() => handleMenuOpen()}
        className={isMenuOpen ? "active" : undefined}
      >
        <MobileMenu onClick={(e) => e.stopPropagation()}>
          <Link href="/">首頁</Link>

          <Link href="/components">組件測試</Link>

          <Link href="/member">會員</Link>
        </MobileMenu>
      </MenuOpenedBackground>
    </FixedAppBar>
  );
}
