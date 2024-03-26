import { getUrl } from "../util";
import BlogList from "./BlogList";
import { Link } from "react-router-dom";

const BlogView = () => {

    return (
        <section>
            <h3 className="titleHead mt-7">Blogs.</h3>
            <p className="text-center text-md font-sans text-gray-500 mb-7">All the tools you need to better manage your finances</p>
            <div className="flex flex-col md:flex-row">
                <div><Link to={"/blogs"}><img className="w-3/5 md:w-3/4 mx-auto select-none" src={getUrl("GroMarket-Blogs-Page.png")} alt="GroMarket Blogs" /></Link></div>
                <BlogList type={"full"} />
            </div>
        </section>
    );
}

export default BlogView;
