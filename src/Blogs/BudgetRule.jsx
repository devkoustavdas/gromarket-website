import Heading from "../components/BlogMarkdown/Heading";
import BlogList from "../Blogs/BlogList";
import Box from "../components/Html.jsx/Box";
import List from "../components/Html.jsx/List/List";
import Img from "../components/Html.jsx/Img";

const BudgetRule = () => {
  return (
    <main className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5">
        <Heading title="Mastering the Art of Spending: How the 50/30/20 Budget Rule Can Help You Achieve Financial Freedom and Still Enjoy Your Life" date={"01/011/2024"}
          tag={["Personal Finance", "Template", "Budget"]} />
        <Img name="503020-Budget-Rule.avif" describe={"50/30/20 Budget Rule"} />
        <div className="px-4 py-3 text-justify">
          <p>Are you tired of constantly feeling like you're living pay check to pay check, with no money left over for savings or unexpected expenses?</p>
          <p>The best way to save money is to not spend it at all. But that’s not possible, right?</p>
          <p>It's time to fix your personal finance. The 50/30/20 budget rule might be just what you need to take control of your finances and start saving money, even after spending.</p>
          <h3>The 50/30/20 rule of thumb is a simple budgeting plan where one allocates the income in three categories — needs, wants, and savings.</h3>
        </div>
        <Box head="Key Takeaways of 50/30/20 Budget Rule" body={<List text={["The 50/30/20 budget rule is a guideline for allocating your budget accordingly: 50% to “needs,” 30% to “wants,” and 20% to “savings”.", "The rule was popularised in a book by Elizabeth Warren and her daughter, Amelia Warren Tyagi.", "Your percentages may need to be adjusted based on your personal circumstances."]} />} />
      </div>
      <div className="w-full lg:w-2/5">
        <BlogList />
      </div>
    </main>
  )
};

export default BudgetRule;
