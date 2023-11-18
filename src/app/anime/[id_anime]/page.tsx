import { getAnimeResponse } from "@/app/service/apiService"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

export default async function page({params}: any) {
  const {id_anime} = params
  const anime = await getAnimeResponse(`anime/${id_anime}`)
  return (
    <>
      <div className="p-4">
        <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year} </h3>
      </div>
      <div className="p-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
        <h3>Peringkat</h3>
        <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2" >
          <h3>score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2" >
          <h3>epidose</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="p-4 text-color-primary flex sm:flex-nowrap flex-wrap gap-2">
        <Image 
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250} height={250} className="w-full rounded object-cover" />
        <p>{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer videoId={anime.data.trailer.youtube_id}/>
      </div>
    </>
  )
}