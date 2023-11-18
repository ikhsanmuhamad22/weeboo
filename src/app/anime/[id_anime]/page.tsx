import { getAnimeResponse } from "@/app/service/apiService"
import Image from "next/image"

export default async function page({params: {id_anime}}: any) {
  const {data} = await getAnimeResponse(`anime/${id_anime}`)
  return (
    <>
      <div className="p-4">
        <h3 className="text-2xl text-color-primary">{data.title} - {data.year} </h3>
      </div>
      <div className="p-4 text-color-primary flex gap-2">
        <Image src={data.images.webp.image_url} alt={data.images.jpg.image_url}
        width={250} height={250} className="w-full rounded object-cover" />
      </div>
    </>
  )
}