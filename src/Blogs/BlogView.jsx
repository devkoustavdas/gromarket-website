import { getUrl } from "../util";
import BlogList from "./BlogList";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const BlogView = () => {

    return (
        <section>
            <h1 className="sr-only">Finance Blogs from GroMarket covering Investment, Taxation, Insurance, Trading, Startups, and others</h1>
            <h2 className="titleHead mt-7">Blogs & Articles</h2>
            <h3 className="w-fit mx-auto text-md font-serif text-slate-400 mb-7 flex-row md:flex">Read the blogs to know how to&nbsp;
            <Typewriter
                options={{
                    strings: ['fulfil your savings goals', 'start and be better at trading', "invest for your family"],
                    autoStart: true,
                    loop: true,
                }} /></h3>
            <div className="w-19/20 mx-auto md:w-full flex flex-col md:flex-row">
                <div className="mx-auto"><Link to={"/blogs"}><img className="w-3/5 md:w-30vw xl:w-25vw mx-auto select-none p-2" src={getUrl("GroMarket-Blogs-Page.png")} alt="GroMarket Blogs" /></Link></div>
                <BlogList type={"full"} />
            </div>
        </section>
    );
}

export default BlogView;
