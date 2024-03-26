import ResourceList from "../Resources/ResourceList";
import { getUrl } from "../util";
import { Link } from "react-router-dom";

const ResourceView = () => {

    return (
        <section>
            <h3 className="titleHead mt-7">Resources.</h3>
            <p className="text-center text-md font-sans text-gray-500 mb-7">All the tools you need to better manage your finances</p>
            <div className="flex flex-col md:flex-row">
                <div className="w-3/5 lg:w-4/5 xl:w-3/5 mx-auto"><Link to={"/resources"}><img className="w-3/5 md:w-4/5 xl:w-3/5 mx-auto select-none" src={getUrl("GroMarket-Resources-Page.png")} alt="GroMarket Resources" /></Link></div>
                <ResourceList type={"full"} />
            </div>
        </section>
    );
}

export default ResourceView;
