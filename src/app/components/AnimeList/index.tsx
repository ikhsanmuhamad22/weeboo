import Image from "next/image";

export default function AnimeList({title, images}: {title: string, images: string}){
  return (
    <div className=" bg-indigo-300 ">
      <Image src={images} alt="..." width={600} height={600}/>
      <h3>{title}</h3>
    </div>
  )
}