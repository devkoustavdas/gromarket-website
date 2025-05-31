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
                head="Stock Market Strategies for Employed Individuals to Build Passive Income"
                tag={["Investment", "Personal Finance"]}
                link={"/blogs/stock-market-strategies-for-employed-passive-income"}
                body={"Discover smart stock market strategies tailored for salaried professionals to generate passive income, with real-life examples and long-term growth insights."} />
            <BlogCard
                link="/blogs/stock-market-investing-tips-noone-tells-you"
                head={"Stock Market Investing Tips No One Will Tell You (But You’ll Wish You Knew Earlier)"}
                body={"Discover rare but crucial stock market investing tips that most investors overlook. Learn about the power of patience, lesser-known metrics, and mental discipline in long-term investing."}
                tag={["Investment", "Personal Finance"]} />
            <BlogCard
                head="Avoid These Bad Investment Habits to Secure Your Financial Future"
                tag={["Investment", "Personal Finance"]}
                link={"/blogs/bad-investment-habits-to-stay-away-from"}
                body={"Secure your financial future by avoiding bad investment habits: shun impatience, chase trends, be aware of fees, stay consistent, and diversify wisely."} />
            <BlogCard
                link="/blogs/claim-deduction-under-section-80gg-for-rent-paid"
                head={"Saving Tax on Rent: A Guide to Section 80GG"}
                body={"Are you a renter paying out of pocket? Don't miss out on tax savings! This guide explains Section 80GG deductions for rent paid in India. Learn eligibility, requirements, how much you can deduct, and how to claim it."}
                tag={["Tax", "Personal Finance"]} />
            <BlogCard
                link="/blogs/itr-1-filing-steps-and-eligibility"
                head={"What is ITR(Income Tax Returns)-1 (Sahaj) and how to File ITR-1 | ITR Filing FY 2023-24"}
                body={"ITR-1, also known as Sahaj Form, is for a person with an income of up to Rs.50 lakh. Read more about eligibility and steps to file ITR-1"}
                tag={["Tax", "Personal Finance"]} />
            <BlogCard
                link="/blogs/50-30-20-budget-rule-in-personal-finance-with-template"
                head={"How the 50/30/20 Budget Rule Can Help You Achieve Financial Freedom and Still Enjoy Your Life"}
                body={"Download GroMarket's free monthly budget template to easily track your spending and take control of your finances."}
                tag={["Personal Finance", "Template", "Budget"]} />
            <BlogCard 
                head="MACD and EMA - The perfect Free Indicator Combo for your Breakout Trades"
                tag={["Investment", "Intraday Trading"]}
                link={"/blogs/ema-and-macd-strategy-for-successful-intraday-trading"}
                body={"Are you on the hunt for that perfect indicator combo to catch breakout trades like a pro?"} />
            
        </div>
    )
}

BlogList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BlogList;
