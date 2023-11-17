import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({params}: any) {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  const searcAnime = await response.json()
  return (
    <>
      <section>
        <Header title={`search for ${decodeKeyword}.....`}/>
        <AnimeList api={searcAnime} />
      </section>
    </>
  )
}
