import { ReactNode } from "react";
import Navbar_Web2 from "./navbar_web2";

type Props = {
  children?: ReactNode;
};

export default function Layout_Web2({ children }: Props) {
  return (
    <div className="container mx-auto">
      <Navbar_Web2 />
      {children}
    </div>
  );
}
