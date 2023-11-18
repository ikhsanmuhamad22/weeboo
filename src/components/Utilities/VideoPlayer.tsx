"use client"

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import Youtube from "react-youtube";
export default function VideoPlayer({videoId}: any) {

  const [isOpen, setIsOpen] = useState(true)
  function handleVideoPlayer() {
    setIsOpen((prevState) => !prevState)
  }
  function Player() {
    return (
      <div className="fixed bottom-2 right-2">
      <button onClick={handleVideoPlayer}>
        <X className="text-color-primary float-right" size={32} />
      </button>
      <Youtube videoId={videoId} 
      onReady={(event) => event.target.pauseVideo()}
      opts={{width: "300", height: "250"}}/>
    </div>
    )
  }
  function ButtonOpenTrailer() {
    return (
      <button onClick={handleVideoPlayer} className="fixed bottom-3 right-5 w-32 bg-color-primary text-color-dark">
        See the Trailer
      </button>
    )
  }
  return isOpen ? <Player /> : <ButtonOpenTrailer />
}