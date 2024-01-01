import BlogCard from "../components/Html.jsx/BlogCard";

const ResourceList = () => {
  return (
    <div className="md:grid md:grid-cols-2">
        <BlogCard link="/resources/free-monthly-budget-spreadsheet-template" head={"Free Monthly Budget Spreadsheet Template"} body={"Download GroMarket's free monthly budget template to easily track your spending and take control of your finances."} tag={["Personal Finance", "Template", "Budget"]} />
        <BlogCard link={"/resources/free-bill-tracker-template"} head="Free Bill Tracker Template" body={"Download GroMarket's free bill tracker template to organize your bills today."} tag={["Personal Finance", "Template", "Bill"]} />
    </div>
  )
}

export default ResourceList
