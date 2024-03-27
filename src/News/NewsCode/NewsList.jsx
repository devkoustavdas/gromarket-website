import BlogCard from "../../components/Html.jsx/BlogCard";
import PropTypes from 'prop-types';

const NewsList = ({ type }) => {
    var cl = "";
    if (type == "full") {
        cl = "grid lg:grid-cols-2 sl:grid-cols-1 md:grid-cols-2"
    }
    else if (type == "part") {
        cl = "grid md:grid-cols-1"
    }
    return (
        <div className={cl}>
            <BlogCard head="Amazon spends $2.75 billion on AI startup Anthropic in its largest venture investment yet" tag={["Corporate Finance", "Investment"]} body={"Tech giant Amazon spends $2.75 billion on American artificial intelligence (AI) startup Anthropic (developer of Claude) in its largest venture investment yet"} link={"/news/amazon-spends-2point7b-on-startup-anthropic-in-largest-venture-investment"} />
        </div>
    )
}

NewsList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default NewsList
