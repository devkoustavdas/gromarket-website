import { useEffect } from 'react'; 
import Meta from '../components/Html.jsx/Meta';
import NewsView from '../News/NewsCode/NewsView';
import { getUrl } from '../util';

const News = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Finance News - GroMarket"}
                description={
                    "Stay updated with the latest news in the finance world, including stock market indices, startup updates, fundings, economic trends, and other financial news on Gromarket"
                }
                keyword={
                    "finance news, stock market, index market, startups, investment, economic trends, financial updates, market analysis, business news"
                }
                link={"news"}
                image={getUrl("GroMarket-News-Page.png")}
            />
            <NewsView />
        </section>
    );
}

export default News;