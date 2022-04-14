import Link from "next/link";

export default function Navbar_Web3() {
  console.log("Navbar_Web3 called");
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Novelty</a>
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/contests">
          <a className="mx-5">View Contests</a>
        </Link>
        <button className="btn btn-outline">Connect to Wallet</button>
      </div>
    </div>
  );
}
