import { getUrl } from "../../util";
import PropTypes from 'prop-types';

const Img = ({name, describe, width}) => {
  return (
    <div title={describe} aria-label={describe} className="mx-auto my-2 w-4/5 lg:w-3/5 md:w-1/2" style={{
        width: width,
    }}>
          <img src={getUrl(name)} loading="lazy" alt={describe} />
          <p className="text-gray-600 text-center text-sm">{describe}</p>
    </div>
  )
}
Img.propTypes = {
    name: PropTypes.string.isRequired,
    describe: PropTypes.string,
    width: PropTypes.string,
};
export default Img;
