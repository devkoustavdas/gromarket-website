import PropTypes from 'prop-types';

const Heading = ({ title, date, icon }) => {
  return (
    <header className=" bg-green mb-4 drop-shadow-md" title={`GroMarket: ${title}`} aria-label={`GroMarket: ${title}`}>
      <h1 className="text-white text-3xl font-bold font-serif text-justify px-6 pt-4 inline-flex gap-2"
        style={{
          textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 2px rgba(0,0,0,.6)",
        }}>
        {icon}{title}
      </h1>
      <div className="text-white font-serif text-base font-normal text-left px-7 pt-3 pb-4">
        <span className="font-semibold">Last Edited</span> on {date}
      </div>
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  icon: PropTypes.string,
};

export default Heading;
