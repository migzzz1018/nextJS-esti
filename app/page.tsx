import { Context } from "./components/context"
export default function Home() {
  return (
  <div className='mx-5 mt-1 max-h-1/2 bg-white rounded-xl px-2'>
    <h1 className="text-black">THIS IS HEADER</h1>
    <Context />
  </div>
  )
}
