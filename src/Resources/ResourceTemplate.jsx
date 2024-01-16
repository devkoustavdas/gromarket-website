import Heading from '../components/BlogMarkdown/Heading';
import ResourceList from "../Resources/ResourceList";
import Share from '../components/Html.jsx/Share';
import Meta from '../components/Html.jsx/Meta';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ResourceTemplate = ({ title, date, tags, link, content }) => {
    return (
        <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 shadow-lg m-3 rounded-lg">
                <Meta title={title} link={link} keyword={tags} />
                <Heading
                    title={title}
                    date={date}
                    tag={tags}
                />
                <div className='lg:flex flex-row'>
                    <section>
                        <div className='ml-6 text-sm'>
                            <span><Link to="/" className="no-underline">Home</Link></span><span className='px-1'>/</span>
                            <span><Link to="/resources" className="no-underline">Resources</Link></span><span className='px-1'>/</span>
                            <span className='bg-gray-100 px-2 py-1 rounded'><Link to={`/resources/${link}`} className="no-underline">{title}</Link></span>
                        </div>
                        <Share
                            title={title}
                            link={link}
                        />
                        {content}
                    </section>
                </div>
            </div>
            <div className="w-full lg:w-2/5">
                <div className='text-xl font-title text-center mt-3 font-bold text-indigo-500'>Check More Resources</div>
                <ResourceList type={"part"} />
            </div>
        </main>
    )
}
ResourceTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
export default ResourceTemplate;
