import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "./service/apiService";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  return (
    <>
      <section>
        <Header title="Most Populer" linkHref="/populer" linkTitle="See All"/>
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
