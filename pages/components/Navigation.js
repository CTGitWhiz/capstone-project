import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.5), 0 0 20px rgba(34, 34, 34, 0.4),
    0 0 30px rgba(34, 34, 34, 0.3), 0 0 40px rgba(34, 34, 34, 0.2),
    0 0 50px rgba(34, 34, 34, 0.1), 0 0 60px rgba(34, 34, 34, 0),
    0 0 70px rgba(255, 255, 255, 0);
  background: linear-gradient(to bottom, #222, #444);
`;

const NavItem = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #f1f1f1;
  text-decoration: none;
  cursor: pointer;
  padding: 0 12px;
  letter-spacing: 1.1px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffcc00;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <Link href="/" aria-label="PicJudge Home">
        <NavItem>[Home]</NavItem>
      </Link>
      <Link href="/supreme" aria-label="Supreme Page">
        <NavItem>[Supreme Gallery]</NavItem>
      </Link>
    </Nav>
  );
}
