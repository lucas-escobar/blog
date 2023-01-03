import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex h-20 items-center justify-center gap-8 bg-neutral-200">
        <Link href="/">
          <div className="bg-neutral-300">Home</div>
        </Link>
        <Link href="/about">
          <div className="">About</div>
        </Link>
      </nav>
    </>
  );
}
