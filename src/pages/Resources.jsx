import ResourceList from '../Resources/ResourceList';
import Meta from '../components/Html.jsx/Meta';
const Resources = () => {
    return (
        <section>
            <Meta
                title={"Resources from GroMarket"}
                description={
                    "Use GroMarket's free resources to easily track your spending and take control of your finances. GroMarket's budget spreadsheet template (available for Excel and Google Sheets) is designed to help organize your finances."
                }
                keyword={
                    "finance, budget, budget template, excel budget, budget spreadsheet, savings, money, GroMarket"
                }
                link={"/resources"}
            />
            <ResourceList />
        </section>
    );
}

export default Resources;
