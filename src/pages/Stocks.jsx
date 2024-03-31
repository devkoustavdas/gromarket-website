import Meta from '../components/Html.jsx/Meta';
import StocksView from '../Stocks/StocksCode/StocksView';

const Stocks = () => {
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Stocks Analysis from GroMarket"}
                description={
                    "Read GroMarket's Stocks Analysis to easily track your spending and take control of your finances. GroMarket's budget spreadsheet template (available for Excel and Google Sheets) is designed to help organize your finances."
                }
                keyword={
                    "finance, stocks, budget, budget template, excel budget, budget spreadsheet, savings, money, GroMarket"
                }
                link={"stocks"}
            />
            <StocksView />
        </section>
    );
}

export default Stocks;
