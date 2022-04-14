import Link from "next/link";

export default function Navbar_Web2() {
  console.log("Navbar_Web2 called");
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Novelty</a>
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/contests">
          <a className="btn btn-outline">View Contests</a>
        </Link>
      </div>
    </div>
  );
}
