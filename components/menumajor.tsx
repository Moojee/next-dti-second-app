import Link from "next/link";

export default function Menumajor() {
  return (
    <>
      <div className="flex justify-center gap-4 py-6 bg-green-800 text-blue-400">
        <Link href="/major">Major</Link>
        <Link href="/major/account">Account</Link>
        <Link href="/major/dm">DM</Link>
        <Link href="/major/dti">DTI</Link>
        <Link href="/major/maketing">Maketing</Link>
       
      </div>
    </>
  );
}
