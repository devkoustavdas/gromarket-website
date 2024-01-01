import BlogCard from "../components/Html.jsx/BlogCard";

const BlogList = () => {
    return (
        <div className="xl:grid-cols-1 md:grid md:grid-cols-2">
            <BlogCard link="/blogs/50-30-20-Budget-Rule" head={"50/30/20 Budget Rule"} body={"Download GroMarket's free monthly budget template to easily track your spending and take control of your finances."} tag={["Personal Finance", "Template", "Budget"]} />
        </div>
    )
}

export default BlogList
