"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/icons/MagnifyingGlass"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch(){
  const searchRef: any = useRef()
  const router = useRouter()
  function handleSearch(e: any) {
    e.preventDefault()
    const searchValue = searchRef.current.value
    if( searchValue ) {
      router.push(`/search/${searchValue}`)
    }
  }
  return (
    <form className="relative">
      <input placeholder="search anime ....." className="p-1 rounded w-full" ref={searchRef}/>
      <button type="submit" className="absolute top-1 end-3" onClick={handleSearch}>
      <MagnifyingGlass size={24} />
      </button>
    </form>
  )
}