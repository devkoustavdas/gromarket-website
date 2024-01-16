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
        <div className="px-6">
          <div className="py-3 text-justify">
            <p>Are you tired of constantly feeling like you're living pay check to pay check, with no money left over for savings or unexpected expenses?</p>
            <p>The best way to save money is to not spend it at all. But that’s not possible, right?</p>
            <p>It's time to fix your personal finance. The 50/30/20 budget rule might be just what you need to take control of your finances and start saving money, even after spending.</p>
            <h3>The 50/30/20 rule of thumb is a simple budgeting plan where one allocates the income in three categories — needs, wants, and savings.</h3>
          </div>
          <Box head="Key Takeaways of 50/30/20 Budget Rule" body={<List text={["The 50/30/20 budget rule is a guideline for allocating your budget accordingly: 50% to “needs,” 30% to “wants,” and 20% to “savings”.", "The rule was popularised in a book by Elizabeth Warren and her daughter, Amelia Warren Tyagi.", "Your percentages may need to be adjusted based on your personal circumstances."]} />} />
          <h2 className="subHead">50% — Needs</h2>
          <p>The expenses you should absolutely pay and the items you need to survive are considered Needs. These include:</p>
          <List text={["Mortgage or Rent Payments", "Groceries", "Utilities, such as water, electricity, cooking gas, and sewer service", "Insurance Premium Payments", "Medical Expenses"]} />
          <p>Half of your post-tax income should be all that you need to meet your needs and obligations. If you are spending more than that on your needs, you will have to reduce your wants or try to adjust your lifestyle, perhaps to a smaller home or a more modest car. A solution might be to travel together in a car, use public transportation, or cook more frequently at home.</p>
          <h2 className="subHead">30% — Wants</h2>
          <p>Wants are all the things you spend money on because you like them. They are not essential. If you boil it down, everything in the “wants” category is optional. These include:</p>
          <List text={["Hobbies", "Electronic Gadgets", "Vacations", "Dining Out", "Purchasing Clothes", "Digital and streaming services like Netflix"]} />
          <p>This category also includes the choices you make when upgrading, such as choosing an expensive steak over a cheaper hamburger or purchasing a Mercedes over a more economical Honda. Wants are all the little extras you spend money on that make life more smooth, enjoyable and entertaining.</p>
          <h2 className="subHead">20% — Savings and Investments</h2>
          <p>Lastly, try to allocate 20% of your post-tax income to savings and investments. These savings with time will help you fulfil your financial goals like buying a car, capital for a start-up, buying a house, etc. This includes:</p>
          <List text={["Investing in Mutual Funds (Equity, Debt, ELSS)", "Retirement contributions", "Debt Repayment", "Emergency fund"]} />
          <h2 className="subHead">Practical Examples of the 50/30/20 Budget Rule</h2>
          <p>Most individuals spend more than they save, often without even realising it. The 50/30/20 rule of thumb can help you become more conscious of your spending patterns(financial habits) and prevent under- and overspending. You can increase your savings for the things that are important to you by spending less on the things that don’t really matter. This is how it goes:</p>
          
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <BlogList />
      </div>
    </main>
  )
};

export default BudgetRule;
