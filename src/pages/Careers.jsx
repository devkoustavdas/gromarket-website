import Subscribe from "../components/Html.jsx/Subscribe"
import { useEffect } from "react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <main className='min-h-screen my-5 w-fit mx-auto text-center'>
    <h3 className="text-indigo-400 text-2xl">Careers at GroMarket</h3>
      No Openings currently.
      <span className='italic block'>We'll be recruiting soon!</span>
      <Subscribe />
    </main>
  )
}

export default Careers
