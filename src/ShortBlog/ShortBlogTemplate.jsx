import React, { lazy, Suspense } from "react";
import { getUrl } from "../util";
import { useEffect } from 'react';
import Share from '../components/Html.jsx/Share';
import Meta from '../components/Html.jsx/Meta';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Subscribe from "../components/Html.jsx/Subscribe";

const ShortBlogTemplate = ({ title, description, image, link, content }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <main className="w-full md:w-4/5 xl:w-3/5 mx-auto px-5">
            <Meta title={title} link={`short-blog/${link}`} description={description} image={image} type={"article"} />
            <h1 className="bg-slate-700 rounded-xl px-5 py-4 mt-8 font-title text-2xl font-bold text-slate-100 text-shadow">{title}</h1>
            <img src={getUrl(image)} alt={title} className="w-full md:max-w-lg mx-auto rounded-xl my-6" />
            <section className="content bg-slate-700 rounded-xl px-5 py-4 mt-6">
                {content}
            </section>
            <section className="content bg-slate-700 rounded-xl px-5 py-4 mt-6">
                <Share
                    title={title}
                    link={`resources/${link}`}
                    description={description}
                />
            </section>
            <h3 className="content bg-slate-700 rounded-xl px-5 py-4 my-6">
               What did we talk about: {description}
            </h3>
        </main>
    )
}

ShortBlogTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
export default ShortBlogTemplate
