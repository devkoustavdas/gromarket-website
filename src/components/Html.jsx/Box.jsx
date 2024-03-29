import PropTypes from 'prop-types';

const Box = ({ id, head, body }) => {
    return (
        <article
            id={`gromarket-${id}`}
            className="rounded-md my-5 px-5 py-3 text-lg font-normal leading-8 border-2 border-slate-500"
            title={`GroMarket: ${head}`}
            aria-label={`GroMarket: ${head}`}>
            <h2 className='subHead font-sans'><span className='pr-1'>&#x2022;</span>{head}</h2>
            <p className='text-justify text-base font-serif'>{body}</p>
        </article>
    );
};

Box.propTypes = {
    id: PropTypes.string,
    head: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    bg: PropTypes.string,
};

export default Box;
