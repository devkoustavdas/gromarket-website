import React, { lazy, Suspense } from "react";
import { useEffect } from 'react';
import Heading from "../../components/BlogMarkdown/Heading";
import StocksList from "./StocksList";
import Share from '../../components/Html.jsx/Share';
import Meta from '../../components/Html.jsx/Meta';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Subscribe from "../../components/Html.jsx/Subscribe";
import Comments from "../../components/Html.jsx/Comments";

const StocksTemplate = ({ title, description, image, date, tags, link, content }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 shadow-lg m-3 rounded-lg px-3 md:px-5 py-2 pb-4">
                <Meta title={title} link={`stocks/${link}`} keyword={tags} description={description} image={image} type={"article"} />
                <Heading
                    title={title}
                    description={description}
                    date={date}
                    tags={tags}
                />
                <div className='lg:flex flex-row'>
                    <section>
                        <div className='font-title text-sm w-11/12 leading-loose'>
                            <span className="hover:bg-slate-700 px-2 py-1 rounded duration-200" title='Go to GroMarket Home Page'><Link to="/" className="no-underline">Home</Link></span><span className="text-teal-500">/</span>
                            <span className="hover:bg-slate-700 px-2 py-1 rounded duration-200" title='Go to Stocks Analysis Page'><Link to="/stocks" className="no-underline">Stock Analysis</Link></span><span className="text-teal-500">/</span>
                            <span className='bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 duration-200'><Link to={`/stocks/${link}`} className="no-underline">{title}</Link></span>
                        </div>
                        <Share
                            title={title}
                            link={`stocks/${link}`}
                            description={description}
                        />
                        <article className='text-justify mt-10'>
                            <h2 className="sr-only">{description}</h2>
                            {content}
                        </article>
                    </section>
                </div>
                <Subscribe />
                <Comments id={link} />
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <div className="w-19/20 mx-auto lg:w-2/5">
                    <div className='text-xl font-sans text-center mt-5 mb-3 font-bold text-teal-500'>Explore More Stock Analysis</div>
                    <StocksList type={"part"} />
                </div>
            </React.Suspense>
        </main>
    )
}
StocksTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
export default StocksTemplate;
