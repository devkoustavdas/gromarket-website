import Meta from '../components/Html.jsx/Meta';
import StocksView from '../Stocks/StocksCode/StocksView';
import { useEffect } from 'react';
import { getUrl } from '../util';

const Stocks = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Stocks Analysis - GroMarket"}
                description={
                    "Get comprehensive stocks analysis, top stock picks, and market insights on Gromarket. Stay updated with the latest trends and make informed investment decisions"
                }
                image={getUrl("GroMarket-Stocks-Page.png")}
                keyword={
                    "stocks analysis, stock picks, market insights, investment decisions, stock market, trading"
                }
                link={"stocks"}
                type={"website"}
            />
            <StocksView />
        </section>
    );
}

export default Stocks;
