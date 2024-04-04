import { useEffect } from 'react'; 
import Meta from '../components/Html.jsx/Meta';
import ResourceView from '../Resources/ResourceView';
import { getUrl } from '../util';

const Resources = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <section className='min-h-1/2'>
            <Meta
                title={"Financial Tools and Resources - GroMarket"}
                description={
                    "Access free financial tools and resources to easily track your spending, expenses, bills, and take control of your finances with GroMarket. GroMarket provides tax calculators, currency conversions, and other useful tools."
                }
                image={getUrl("GroMarket-Resources-Page.png")}
                keyword={
                    "financial tools, resources, track spending, expenses and bills, control finances, tax calculators, currency conversions"
                }
                link={"resources"}
                type={"website"}
            />
            <ResourceView />
        </section>
    );
}

export default Resources;
