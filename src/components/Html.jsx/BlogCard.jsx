import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogCard = ({ head, body, link, tag }) => {
    
    return (
    <Link to={link} className="no-underline">
        <div
            className="my-6 mx-auto py-3 px-4 w-11/12 border border-solid border-indigo-500 rounded-md overflow-none bg-white shadow duration-200 hover:scale-105"
            title={`GroMarket: ${head}`}
            aria-label={`GroMarket: ${head}`}>
            <h2 className="subHead flex flex-row gap-2">
                {head}
                <span className="pt-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                </span>
            </h2>
            <div className="hr"></div>
                <p className="">{body.length > 200 ? `${body.slice(0, 200)}...` : body}</p>
                <div className="mt-2 inline-block whitespace-nowrap">
                    {tag.map((tagItem, index) => (
                        <span key={index} className="bg-gray-200 px-2 py-1 mx-1 rounded-xl">
                            {tagItem}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};
BlogCard.propTypes = {
    head: PropTypes.string.isRequired,
    body: PropTypes.string,
    link: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string),
};
export default BlogCard;
