import BlogCard from "../components/Html.jsx/BlogCard";
import PropTypes from 'prop-types';

const ResourceList = ({type}) => {
  var cl="";
  if (type=="full") {
    cl = "grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2"
  }
  else if (type == "part") {
    cl = "grid md:grid-cols-1"
  }
  return (
    <div className={cl}>
        <BlogCard link="/resources/free-monthly-budget-spreadsheet-template" head={"Free Monthly Budget Spreadsheet Template"} body={"Download GroMarket's free monthly budget template to easily track your spending and take control of your finances."} tag={["Personal Finance", "Template", "Budget"]} />
        <BlogCard link={"/resources/free-bill-tracker-template"} head="Free Bill Tracker Template" body={"Download GroMarket's free bill tracker template to organize your bills today."} tag={["Personal Finance", "Template", "Bill"]} />
    </div>
  )
}

ResourceList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ResourceList;
