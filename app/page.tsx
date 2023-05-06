import { Context } from "./components/context"
export default function Home() {
  return (
    <div className='mx-5 mt-1 max-h-1/2 bg-white rounded-xl px-2'>
      <section className="h-20 flex items-center pl-5 text-black border-2 border-red-500 ">
        <span className="flex pl-[15px] items-center h-10 bg-slate-500 w-[75%] max-w-[500px]">THIS IS Searchbar</span>
      </section>
      <Context />
    </div>
  )
}
