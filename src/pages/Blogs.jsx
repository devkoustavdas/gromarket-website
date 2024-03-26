import Meta from '../components/Html.jsx/Meta';
import BlogView from '../Blogs/BlogView';

const Blogs = () => {
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Blogs from GroMarket"}
                description={
                    "Read GroMarket's free blogs to easily track your spending and take control of your finances. GroMarket's budget spreadsheet template (available for Excel and Google Sheets) is designed to help organize your finances."
                }
                keyword={
                    "finance, budget, budget template, excel budget, budget spreadsheet, savings, money, GroMarket"
                }
                link={"blogs"}
            />
            <BlogView />
        </section>
    );
}

export default Blogs;
