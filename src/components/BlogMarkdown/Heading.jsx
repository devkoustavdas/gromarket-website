import PropTypes from 'prop-types';

const Heading = ({ title, date, tag }) => {
  return (
    <header className="text-white bg-teal-500 mb-4 drop-shadow-md px-6" title={`GroMarket: ${title}`} aria-label={`GroMarket: ${title}`}>
      <h1 className="text-3xl md:text-4xl text-left pt-4 text-shadow font-sans">
        {title}
      </h1>
      <div>
        <span>Tags</span><span className='px-1'>&#x2022;</span><div className="mt-2 inline-block whitespace-nowrap">
          {tag.map((tagItem, index) => (
            <span key={index} className="bg-teal-600 px-2 mx-1 py-1 rounded-xl">
              {tagItem}
            </span>
          ))}
        </div>
      </div>
      {date && (
        <div className="font-serif text-base font-normal text-left pt-3 pb-4">
          <span className="font-semibold">Last Edited</span> on {date}
        </div>
      )}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Heading;
