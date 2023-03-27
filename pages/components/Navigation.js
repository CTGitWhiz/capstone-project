import Link from "next/link";
import { Nav, NavItem } from "@/styles/Navigation.styles";

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
