import Link from "next/link";

export default function Header({title, linkHref, linkTitle}: {title: string, linkHref?: string, linkTitle?: string}) {
  return (
    <div className="p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">{title}</h1>
    {linkHref && linkTitle 
      ? <Link href={linkHref} className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
        : null
    }
  </div>
  )
}