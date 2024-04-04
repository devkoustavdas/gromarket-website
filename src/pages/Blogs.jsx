import { useEffect } from 'react'; 
import Meta from '../components/Html.jsx/Meta';
import BlogView from '../Blogs/BlogView';
import { getUrl } from '../util';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Finance Blogs from GroMarket"}
                description={
                    "Read GroMarket's collection of finance blogs covering trading strategies, investing advice, budget planning, tax strategies, debt management, savings tips, and financial insights"
                }
                image={getUrl("GroMarket-Blogs-Page.png")}
                keyword={
                    "Tax planning, Debt management, Trading strategies, Investing tips, Savings advice, Budget planning, Financial insights"
                }
                link={"blogs"}
                type={"website"}
            />
            <BlogView />
        </section>
    );
}

export default Blogs;
