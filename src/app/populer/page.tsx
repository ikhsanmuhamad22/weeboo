"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../service/apiService"

export default function Page() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] : any = useState([]) 

  async function fetchData() {
    const data = await getAnimeResponse('top/anime',`page=${page}`)
    setTopAnime(data)
  }
  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <>
      <HeaderMenu title={`Anime Popular #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </>
  )
}