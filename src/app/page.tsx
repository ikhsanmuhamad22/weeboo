import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse, getNestedAnimeResponse } from "../service/apiService";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnimeResponse: any = await getNestedAnimeResponse("recommendations/anime", "entry")
  const recommendedAnime = { data: recommendedAnimeResponse.slice(0, 8) }
  return (
    <>
      <section>
        <Header title="Most Populer" linkHref="/populer" linkTitle="See All"/>
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation Anime"/>
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}
