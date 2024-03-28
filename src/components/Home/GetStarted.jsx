import ResourceView from "../../Resources/ResourceView";
import BlogView from "../../Blogs/BlogView";
import NewsView from "../../News/NewsCode/NewsView";
import Subscribe from "../Html.jsx/Subscribe";

const GetStarted = () => {
  return (
    <section className="min-h-1/2 justify-center px-6 py-4">
    
      <ResourceView />

      <Subscribe />
      
      <BlogView />

      <NewsView />

    </section>
  )
}

export default GetStarted;
