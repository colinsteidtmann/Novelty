import Link from "next/link";

export default function Hero() {
  console.log("Hero called");
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{"What's"} Your Novel Idea?</h1>
          <p className="py-6">
            <strong>Create</strong> something novel <br />
            ——— Inventions, art, ideas, public goods ———
            <br /> Enter <strong>contests</strong> to win! <br /> And{" "}
            <strong>cement</strong> your novel creation forever in the ledger!{" "}
          </p>
          <Link href="/contests">
            <a className="btn bg-black">Get Started</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
