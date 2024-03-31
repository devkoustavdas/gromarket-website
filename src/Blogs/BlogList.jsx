import BlogCard from "../components/Html.jsx/BlogCard";
import PropTypes from 'prop-types';

const BlogList = ({ type }) => {
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
                link="/blogs/50-30-20-Budget-Rule" 
                head={"50/30/20 Budget Rule"} 
                body={"Download GroMarket's free monthly budget template to easily track your spending and take control of your finances."} 
                tag={["Personal Finance", "Template", "Budget"]} />
            <BlogCard 
                head="MACD and EMA - The perfect Free Indicator Combo for your Breakout Trades"
                tag={["Investment", "Intraday Trading"]}
                link={"/blogs/ema-and-macd-for-intraday-trading"}
                body={"Are you on the hunt for that perfect indicator combo to catch breakout trades like a pro?"} />
            <BlogCard
                head="Avoid These Bad Investment Habits to Secure Your Financial Future"
                tag={["Investment", "Intraday Trading"]}
                link={"/blogs/bad-investment-habits-to-stay-away-from"}
                body={"Secure your financial future by avoiding bad investment habits: shun impatience, chase trends, be aware of fees, stay consistent, and diversify wisely."} />
        </div>
    )
}

BlogList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BlogList;
