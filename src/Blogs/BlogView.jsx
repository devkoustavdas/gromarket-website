import { getUrl } from "../util";
import BlogList from "./BlogList";
import { Link } from "react-router-dom";

const BlogView = () => {

    return (
        <section>
            <h1 className="sr-only">Finance Blogs from GroMarket covering Investment, Taxation, Insurance, Trading, Startups, and others</h1>
            <h2 className="titleHead mt-7">Blogs.</h2>
            <h3 className="text-center text-md font-serif text-slate-400 mb-7">Read the blogs to know how to full your savings goals</h3>
            <div className="flex flex-col md:flex-row">
                <div><Link to={"/blogs"}><img className="w-3/5 md:w-3/4 mx-auto select-none" src={getUrl("GroMarket-Blogs-Page.png")} alt="GroMarket Blogs" /></Link></div>
                <BlogList type={"full"} />
            </div>
        </section>
    );
}

export default BlogView;
