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
                link="/stocks/best-stocks-to-buy-for-short-term"
                head={"Best Stocks To Buy For Short Term Investments"}
                body={"Best Stocks To Buy For Short Term Investments"}
                tag={["Investments", "Stocks"]} />
        </div>
    )
}

StocksList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default StocksList;
