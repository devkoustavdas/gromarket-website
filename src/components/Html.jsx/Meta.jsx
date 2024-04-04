import PropTypes from 'prop-types';
import {siteLink} from "../../siteLink";
import { getUrl } from '../../util';

const Meta = ({ title, description, image, type, keyword, link }) => {
    return (
        <head>
            <link rel="canonical" href={`${siteLink}/${link}`} />
            <meta name="description" content={description} />
            <meta name="author" content="GroMarket" />
            <meta name="keywords" content={`Gromarket, Finance, ${keyword}`} />
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`https://gromarket.vercel.app/${link}`}/>
            <meta property="og:image" content={getUrl(image)} />
            <meta property="og:type" content={type} />
            <meta name="twitter:card" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={`https://gromarket.vercel.app/${link}`} />
            <meta name="twitter:image" content={getUrl(image)} />

        </head>
    );
};
Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    keyword: PropTypes.string,
    type: PropTypes.string,
};
export default Meta;
