export async function getAnimeResponse(resource: string, query?: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}

export async function getNestedAnimeResponse(resource: any, objProperty:any) {
  const response = await getAnimeResponse(resource)
  return response.data.flatMap((item: any) => item.entry)
}