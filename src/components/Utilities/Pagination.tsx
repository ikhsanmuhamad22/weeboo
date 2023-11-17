export default function Pagination({page, lastPage, setPage}: {page: number, lastPage: number, setPage: any}) {
  function scrollTop() {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }
  function handleNextPage(){
    setPage((prevState: number) => prevState + 1)
    scrollTop()
  }
  function handlePrevPage(){
    setPage((prevState: number) => prevState - 1)
    scrollTop()
  }
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      { page > 1 ?
        <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>Prev</button>
        : null
      }
      <div>{page} of {lastPage}</div>
      <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>
    </div>
  )
}