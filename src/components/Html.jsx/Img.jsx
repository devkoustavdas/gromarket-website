import { getUrl } from "../../util";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Img = ({ name, describe, width, link }) => {
  return (
    <div title={describe} aria-label={describe} className="mx-auto my-2 w-4/5 lg:w-3/5 md:w-1/2 select-none">
      <h4 className="hidden">Gromarket - {describe}</h4>
      <p className="absolute py-2 px-4 text-left break-words -z-10 bg-opacity-50 text-white bg-transparent w-2/3 lg:w-3/5 md:w-1/2">{describe}</p>
      <Link to={link}>
        <img src={getUrl(name)} loading="lazy" alt={describe} className="rounded-xl border-3 border-slate-400 duration-200 hover:opacity-50 ease-in hover:-z-30" />
      </Link>
      <p className="text-slate-400 text-center text-sm italic bg-transparent">{describe}</p>
    </div>
  )
}
Img.propTypes = {
  name: PropTypes.string.isRequired,
  describe: PropTypes.string,
  width: PropTypes.string,
  link: PropTypes.string,
};
export default Img;
