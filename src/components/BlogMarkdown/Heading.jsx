import PropTypes from 'prop-types';

const Heading = ({ title, date, tag }) => {

  return (
    <header className="text-slate-300 onesideroundedbox bg-slate-700 mb-4 pl-6 pr-7 pt-5 pb-1" title={`GroMarket: ${title}`} aria-label={`GroMarket: ${title}`}>
      <h1 className="w-11/12 text-xl md:text-3xl text-left text-shadow font-title font-bold mb-2">
        {title}
      </h1>
      <div>
        <span>Tags</span>
        <span className='px-1'>&#x2022;</span>
        <div className="whitespace-nowrap flex flex-wrap">
          {tag.map((tagItem, index) => (
            <span key={index} className="bg-teal-600 text-slate-100 px-2 mx-1 my-1 py-1 rounded-xl text-sm">
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
