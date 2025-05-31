import ResourceView from "../../Resources/ResourceView";
import BlogView from "../../Blogs/BlogView";
import NewsView from "../../News/NewsCode/NewsView";
import StocksView from "../../Stocks/StocksCode/StocksView";
import Subscribe from "../Html.jsx/Subscribe";
import ToolsView from "../../Tools/ToolsHTML/ToolsView";

const GetStarted = () => {
  return (
    <section className="min-h-1/2 justify-center px-6 py-4"> 

      <ToolsView />
      
      <BlogView />

      <Subscribe />

      <StocksView />

      <ResourceView />

      <NewsView />

    </section>
  )
}

export default GetStarted;
