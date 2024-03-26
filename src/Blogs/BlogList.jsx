import BlogCard from "../components/Html.jsx/BlogCard";
import PropTypes from 'prop-types';

const BlogList = ({ type }) => {
    var cl = "";
    if (type == "full") {
        cl = "grid lg:grid-cols-2 sl:grid-cols-1 md:grid-cols-2"
    }
    else if (type == "part") {
        cl = "grid md:grid-cols-1"
    }
    return (
        <div className={cl}>
            <BlogCard link="/blogs/50-30-20-Budget-Rule" head={"50/30/20 Budget Rule"} body={"Download GroMarket's free monthly budget template to easily track your spending and take control of your finances."} tag={["Personal Finance", "Template", "Budget"]} />
        </div>
    )
}

BlogList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BlogList;
