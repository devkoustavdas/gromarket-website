import Meta from '../components/Html.jsx/Meta';
import ResourceView from '../Resources/ResourceView';

const Resources = () => {
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Financial Tools and Resources from GroMarket"}
                description={
                    "Use GroMarket's free Financial Tools and Resources to easily track your spending, expenses, bills and take control of your finances. GroMArket provides tax calculators, currency conversions and others."
                }
                keyword={
                    "finance, budget, budget template, excel budget, budget spreadsheet, savings, money, GroMarket"
                }
                link={"resources"}
            />
            <ResourceView />
        </section>
    );
}

export default Resources;
