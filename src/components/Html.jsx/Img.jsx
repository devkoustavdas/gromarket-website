import { getUrl } from "../../util";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Img = ({ name, describe, link }) => {
  return (
    <object
      aria-label={describe}
      className="mx-auto my-2 w-4/5 lg:w-3/5 md:w-1/2 select-none"
    >
      <h4 className="sr-only">Gromarket - {describe}</h4>

      <Link to={link}>
        <img
          src={getUrl(name)}
          alt={describe || ""}
          title={describe}
          loading="lazy"
          className="rounded-xl border-3 border-slate-400 duration-200 hover:opacity-50"
        />
      </Link>

      {describe && (
        <p className="text-slate-400 text-center text-sm italic">
          {describe}
        </p>
      )}
    </object>
  );
};

Img.propTypes = {
  name: PropTypes.string.isRequired,   
  describe: PropTypes.string,            
  link: PropTypes.string,                
};

export default Img;
