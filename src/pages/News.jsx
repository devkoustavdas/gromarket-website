import Meta from '../components/Html.jsx/Meta';
import NewsView from '../News/NewsCode/NewsView';

const News = () => {
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Finance News from GroMarket"}
                description={
                    "Read GroMarket's free Finance News to easily track your spending and take control of your finances. GroMarket's budget spreadsheet template (available for Excel and Google Sheets) is designed to help organize your finances."
                }
                keyword={
                    "finance, budget, budget template, excel budget, budget spreadsheet, savings, money, GroMarket"
                }
                link={"news"}
            />
            <NewsView />
        </section>
    );
}

export default News;