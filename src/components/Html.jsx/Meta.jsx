import PropTypes from 'prop-types';
import {siteLink} from "../../siteLink";

const Meta = ({ title, description, image, keyword, link }) => {
    return (
        <head>
            <link rel="canonical" href={`${siteLink}/${link}`} />
            <meta name="description" content={description} />
            <meta name="author" content="Koustav Das" />
            <meta name="keywords" content={`Gromarket, Finance, ${keyword}`} />
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:url"
                content={`https://gromarket.vercel.app/${link}`}
            />
            <meta
                property="og:image"
                content={image}
            />
        </head>
    );
};
Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    keyword: PropTypes.string,
};
export default Meta;
