import BlogCard from "../../components/Html.jsx/BlogCard";
import PropTypes from 'prop-types';

const StocksList = ({ type }) => {
    var cl = "";
    if (type == "full") {
        cl = "grid lg:grid-cols-2 sl:grid-cols-1 md:grid-cols-2"
    }
    else if (type == "part") {
        cl = "grid md:grid-cols-1"
    }
    return (
        <div className={cl}>
            <BlogCard
                link="/stocks/niftyfmcg"
                head={"Nifty FMCG (NSE: NIFTYFMCG)"}
                body={"Nifty FMCG Performance: Nifty FMCG Index Today (15 April, 2024), Week, Month, Year Change, Support and Resistant levels, and all other technicals"}
                tag={["Investments", "Stocks"]} />
            <BlogCard
                link="/stocks/stocks-between-rs-1000-to-2000-with-growth-potential"
                head={"Top Stocks in the Rs 1000 to Rs 2000 Price Range with potential growth (with great ROCE, ROE, Returns)"}
                body={"Discover top stocks like ICICI Bank, Venus Pipes, etc priced between Rs 1000-2000, boasting RoE & RoCE > 5% and one-year returns > 5%, ideal for balanced growth investing"}
                tag={["Investments", "Stocks"]} />
        </div>
    )
}

StocksList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default StocksList;
