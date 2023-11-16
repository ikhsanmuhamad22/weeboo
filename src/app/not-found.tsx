import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen flex-col gap-6">
      <h1 className="text-5xl font-bold text-color-accent">404 | Not Found</h1>
      <Link href={'/'} className="text-2xl font-bold text-color-primary hover:text-color-accent transition-all underline">Back</Link>
    </div>
  )
}