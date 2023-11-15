import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-indigo-500">
      <div className="flex justify-between p-4">
        <Link href="/" className="font-bold md:flex-row flex-col gap-2 text-white text-2xl">Weebooin</Link>
        <input placeholder="search anime ....." className=""/>
      </div>
    </header>
  )
}