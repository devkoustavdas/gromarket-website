import BlogCard from "../components/Html.jsx/BlogCard";
import PropTypes from 'prop-types';
import { getAllBlogs } from "./getAllBlogs";

const BlogList = ({ type }) => {
    const posts = getAllBlogs();

    var cl = "";
    if (type == "full") {
        cl = "grid lg:grid-cols-2 sl:grid-cols-1 md:grid-cols-2"
    }
    else if (type == "part") {
        cl = "grid md:grid-cols-1"
    }

    return (
        <div className="cl">
            {posts.map(post => (
                <BlogCard
                    key={post.slug}
                    head={post.title}
                    body={post.description}
                    tag={post.tags}
                    link={`/blogs/${post.slug}`}
                />
            ))}
        </div>
    );
};

BlogList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BlogList;
