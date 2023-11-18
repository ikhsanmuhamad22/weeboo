import { getAnimeResponse } from "@/app/service/apiService";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({params}: any) {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const searcAnime = await getAnimeResponse('anime/',`q=${decodeKeyword}`)
  return (
    <>
      <section>
        <Header title={`search for ${decodeKeyword}.....`}/>
        <AnimeList api={searcAnime} />
      </section>
    </>
  )
}
