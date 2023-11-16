import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  return (
    <>
      <section>
        <Header title="Most Populer" linkHref="/populer" linkTitle="See All"/>
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
