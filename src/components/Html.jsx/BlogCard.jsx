import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogCard = ({ head, body, link, tag }) => {

    return (
        <Link to={link} className="no-underline">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-100 pt-1 my-3 mx-auto w-39/40 md:w-19/20 rounded-md shadow duration-200 hover:scale-103">
                <div className="h-full w-full rounded-md overflow-none bg-slate-800 py-3 px-4"
                    title={`GroMarket: ${head}`}
                    aria-label={`GroMarket: ${head}`}>
                    <h3 className="subHead flex flex-row gap-2">
                        {head}
                        <span className="pt-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </span>
                    </h3>
                    <div className="hr"></div>
                    <p className="text-slate-300 break-words text-left">{body.length > 200 ? `${body.slice(0, 200)}...` : body}</p>
                    <div className="whitespace-nowrap flex flex-wrap">
                        {tag.map((tagItem, index) => (
                            <span key={index} className="bg-slate-700 text-slate-400 px-2 py-1 mx-1 my-1 rounded-xl inline text-sm">
                                {tagItem}
                            </span>
                        ))}
                    </div>
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
