import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Logo = ({size}) => {
    var txtHt, lnHt, pL, px, py;
    txtHt = 14 + 2*size;
    lnHt = 0.25*size;
    if (size < 3) {
        lnHt = 0.3 * size;
        pL = 5 + 2.1 * size;
        py = 1.7 * size;
        px = 2 * size;
    } 
    else if (size <= 8) {
        pL = 5 + 2 * size;
        py = 1.7 * size;
        px = 2 * size;
    }
    else {
        pL = 2 + 2 * size;
        py = 1.1 * size;
        px = 1.6 * size;
    } 

    return (
        <Link to={"/"} className="no-underline">
        <div title="GroMarket Financial Services" aria-label="GroMarket Official Logo">
            <a href="https://gromarket.vercel.com/" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-col m-0 text-indigo-500 font-bold font-title w-fit select-none bg-teal-100 border border-solid border-indigo-500 rounded z-10 visible static overscroll-none break-inside-avoid' style={{
                    fontSize: `${txtHt}px`,
                    lineHeight: `${lnHt}rem`,
                    padding: `${py}px ${px}px`,
                }}>
                    <span>gro</span>
                    <span style={{
                        paddingLeft: `${pL}px`,
                    }}>market.</span>
                </div>
            </a>
        </div>
        </Link>
    )
};

Logo.propTypes = {
    size: PropTypes.string.isRequired,
};

export default Logo;
