import { ReactNode } from "react";
import Navbar_Web3 from "./navbar_web3";

type Props = {
  children?: ReactNode;
};

export default function Layout_Web3({ children }: Props) {
  return (
    <div className="container mx-auto px-3 lg:px-0">
      <Navbar_Web3 />
      {children}
    </div>
  );
}
