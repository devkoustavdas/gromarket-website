import React, { lazy, Suspense } from "react";
import Heading from '../components/BlogMarkdown/Heading';
import ResourceList from "../Resources/ResourceList";
import Share from '../components/Html.jsx/Share';
import Meta from '../components/Html.jsx/Meta';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Subscribe from "../components/Html.jsx/Subscribe";

const ResourceTemplate = ({ title, description, date, tags, link, content }) => {
    return (
        <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 shadow-lg m-3 rounded-lg px-3 md:px-5 py-2 pb-4">
                <Meta title={title} link={`resources/${link}`} keyword={tags} description={description} />
                <Heading
                    title={title}
                    date={date}
                    tags={tags}
                />
                <div className='lg:flex flex-row'>
                    <section>
                        <div className='font-title text-sm w-11/12 leading-loose'>
                            <span className="hover:bg-slate-700 px-2 py-1 rounded duration-200" title='Go to GroMarket Home Page'><Link to="/" className="no-underline">Home</Link></span><span className="text-teal-500">/</span>
                            <span className="hover:bg-slate-700 px-2 py-1 rounded duration-200" title='Go to Resources Page'><Link to="/resources" className="no-underline">Resources</Link></span><span className="text-teal-500">/</span>
                            <span className='bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 duration-200'><Link to={`/resources/${link}`} className="no-underline">{title}</Link></span>
                        </div>
                        <Share
                            title={title}
                            link={`resources/${link}`}
                        />
                        <div className='text-justify mt-10'>
                            <h2 className="sr-only">{description}</h2>
                            {content}
                        </div>
                    </section>
                </div>
                <Subscribe />
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <div className="w-full lg:w-2/5">
                    <div className='text-xl font-sans text-center mt-5 mb-3 font-bold text-teal-500'>Check More Resources</div>
                    <ResourceList type={"part"} />
                </div>
            </React.Suspense>
        </main>
    )
}
ResourceTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
export default ResourceTemplate;
