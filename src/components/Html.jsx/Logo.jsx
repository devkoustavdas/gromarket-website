import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import logo from "../../assets/GroMarket-Full-Logo.svg"

const Logo = ({ size }) => {

    return (
        <Link to={"/"} className="no-underline">
            <div title="GroMarket Financial Services" aria-label="GroMarket Official Logo" className='mb-2'>
                <img src={logo} alt="GroMarket Financial Services" style={{
                    width: `${40*size}px`
                }} />
            </div>
        </Link>
    )
};

Logo.propTypes = {
    size: PropTypes.string.isRequired,
};

export default Logo;
