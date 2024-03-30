import Button from "../Html.jsx/Button/Button";
import { getUrl } from "../../util";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 bg-indigo-500 w-full mx-0 my-5 py-6 px-5 rounded-lg justify-center">
      <div><img src={getUrl("GroMarket Logo.png")} className="w-12 mx-auto" alt="Gromarket Standalone Logo" /></div>
      <div className="text-gray-50 font-sans text-md text-center md:leading-tight md:w-1/6 md:text-left">Subscribe To Our Newsletter</div>
      <div className="relative w-full md:w-3/5">
        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-0" placeholder="Enter your email" type="email" id="email" />
      </div>
      <div>
        <Button text={"Subscribe"} type="Blank" title={"Click to Subscribe to Newsletter"} />
      </div>
    </div>
  )
}

export default Subscribe
