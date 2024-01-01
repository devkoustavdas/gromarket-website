import PropTypes from 'prop-types';

const Box = ({ id, head, body }) => {
    return (
        <article
            id={`gromarket-${id}`}
            className="rounded-md w-11/12 mx-auto my-5 shadow-md px-4 py-3 font-sans text-lg font-normal leading-8"
            title={`GroMarket: ${head}`}
            aria-label={`GroMarket: ${head}`}>
            <h2 className='subHead'>{head}</h2>
            <p className='text-justify'>{body}</p>
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
