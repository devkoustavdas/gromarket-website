import ResourceList from "../Resources/ResourceList";
import { getUrl } from "../util";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const ResourceView = () => {

    return (
        <section>
            <h1 className="sr-only">Finance Resources and Finance tools from GroMarket covering Investment, Taxation, Insurance, Trading, Startups, and others</h1>
            <h2 className="titleHead mt-7">Resources & Tools</h2>
            <p className="w-fit mx-auto text-md font-serif text-slate-400 mb-7 text-center flex-row md:flex select-none">Explore all the tools and resources you need to&nbsp;
                <Typewriter
                    options={{
                        strings: ['better manage your finances', 'calculate your returns and taxes', "take financial descisions"],
                        autoStart: true,
                        loop: true,
                    }} /></p>
            <div className="w-19/20 mx-auto md:w-full flex flex-col md:flex-row">
                <div className="mx-auto"><Link to={"/resources"}><img className="w-3/5 md:w-30vw xl:w-25vw mx-auto select-none p-2" src={getUrl("GroMarket-Resources-Page.png")} alt="GroMarket Resources" /></Link></div>
                <ResourceList type={"full"} />
            </div>
        </section>
    );
}

export default ResourceView;
