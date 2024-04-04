import BlogTemplate from '../BlogTemplate';
import Img from '../../components/Html.jsx/Img';
import styles from "../../content.module.css";
import { useState } from 'react';

const BudgetRule = () => {
  const [income, setIncome] = useState();

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  return (
    <BlogTemplate
      title="How the 50/30/20 Budget Rule Can Help You Achieve Financial Freedom and Still Enjoy Your Life | The budget planning Calculator you actually need"
      date={"01/11/2024"}
      tag={["Personal Finance", "Template", "Budget"]}
      link={"50-30-20-Budget-Rule"}
      content={
        <section className={styles.content}>
          <Img name="503020-Budget-Rule.avif" describe="50/30/20 Budget Rule" link={"/blogs/50-30-20-Budget-Rule"} />
          <blockquote>
            <p>Are you tired of constantly feeling like you&#39;re living paycheck to paycheck, with no money left over for savings or unexpected expenses?</p>
            <p>The best way to save money is to not spend it at all. But that’s not possible, right?</p>
          </blockquote>
          <p>It&#39;s time to fix your personal finance. The 50/30/20 budget rule might be just what you need to take control of your finances and start saving money, even after spending.</p>
          <p>The 50/30/20 rule of thumb is a simple budgeting plan where one allocates the income in three categories — needs, wants, and savings.</p>
          <h3 id="key-takeaways-of-50-30-20-budget-rule">Key Takeaways of 50/30/20 Budget Rule</h3>
          <ul>
            <li>The 50/30/20 budget rule is a guideline for allocating your budget accordingly: <strong>50%</strong> to “<strong>needs</strong>,” <strong>30%</strong> to “<strong>wants</strong>,” and <strong>20%</strong> to “<strong>savings</strong>”.</li>
            <li>The rule was popularised in a book by Elizabeth Warren and her daughter, Amelia Warren Tyagi.</li>
            <li>Your percentages may need to be adjusted based on your personal circumstances.</li>
          </ul>
          <div>
            <h2>50/30/20 Budget Rule Calculator</h2>
            <p>Plan your expenses according to 50/30/20 Budget Rule using the calculator</p>
            <input type="number" placeholder='Enter your in-hand monthly income in Rs' value={income}
              onChange={handleIncomeChange} />
            <h3>Your ideal expense structure according to 50/30/20 Budget Rule</h3>
            <ul>
              <li><h4>You should use Rs {Math.floor(income*0.5)} for your daily needs</h4></li>
              <li><h4>You should not cross Rs {Math.floor(income * 0.3)} for your wants and things you like</h4></li>
              <li><h4>You should consistently save and invest Rs {Math.floor(income * 0.2)} every month</h4> </li>
            </ul>
            <p>Now plan your budget around these numbers.</p>
          </div>
          <h2 id="50-needs">50% — Needs</h2>
          <p>The expenses you should absolutely pay and the items you need to survive are considered Needs. These include:</p>
          <ul>
            <li>Mortgage or Rent Payments</li>
            <li>Groceries</li>
            <li>Utilities, such as water, electricity, cooking gas, sewer service, phone, and Internet</li>
            <li>Health & Life Insurance Premium Payments</li>
            <li>Medical Expenses</li>
            <li>Education and Personal Development</li>
            <li>Public Transportation</li>
          </ul>
          <p><strong><em>Half of your post-tax income</em></strong> should be all that you need to meet your needs and obligations. If you are spending more than that on your needs, you will have to reduce your wants or try to adjust your lifestyle, perhaps to a smaller home or a more modest car. A solution might be to travel together in a car, use public transportation, or cook more frequently at home.</p>
          <h2 id="30-wants">30% — Wants</h2>
          <p>Wants are all the things you spend money on because <em>you like them</em> or want to use/have them. They are not essential. If you boil it down, everything in the “wants” category is optional. These include:</p>
          <ul>
            <li>Spending on Hobbies</li>
            <li>Charitable Donations</li>
            <li>Purchasing electronic gadgets and games</li>
            <li>Home decor and furniture</li>
            <li>Vacations and Trips</li>
            <li>Gifts</li>
            <li>Dining Out</li>
            <li>Purchasing Clothes, and personal care products</li>
            <li>Streaming services and other subscriptions and memberships</li>
            <li>Movie, Sports, and concert tickets</li>
          </ul>
          This category also includes the choices you make when upgrading, such as choosing an expensive steak over a cheaper hamburger or purchasing a Audi over a more economical Honda. Wants are all the little extras you spend money on that make life smoother, enjoyable, entertaining, and happier.
          <h2 id="20-savings-and-investments">20% — Savings and Investments</h2>
          <p>Lastly, try to allocate <strong><em>20% of your post-tax income to savings and investments</em></strong>. These savings, with time, will help you fulfil your financial goals like buying a car, capital for a start-up, buying a house, etc. This includes:</p>
          <ul>
            <li>Investing in Mutual Funds (Equity, Debt, ELSS)</li>
            <li>Retirement contributions</li>
            <li>Loan Repayment and EMI pemiums</li>
            <li>Emergency fund</li>
            <li>Short-term shavings goals</li>
          </ul>
          <h2 id="practical-examples-of-the-50-30-20-budget-rule">Practical Examples of the 50/30/20 Budget Rule</h2>
          <p>Most individuals spend more than they save, often without even realizing it. The 50/30/20 rule of thumb can help you become more conscious of your spending patterns (financial habits) and prevent under- and overspending. You can increase your savings for the things that are important to you by spending less on the things that don’t really matter. This is how it goes:</p>
          <li><h3 id="calculate-your-monthly-in-hand-income">Calculate your monthly in-hand income</h3></li>
          <p>Let’s say you and your spouse have a total of Rs 1,00,000 deposited into your bank account each month from your jobs, side income sources, businesses, and other sources included. After deductions like Income tax, Employee PF, NPS contribution let’s say your in-hand pay becomes Rs 80,000. We’ll calculate 50/30/20 Budget based on this monthly in-hand salary.</p>
          <li><h3 id="calculate-a-spending-threshold-for-each-category">Calculate a spending threshold for each category according to the 50/30/20 Budget Rule</h3></li>
          <p>Based on the 50/30/20 budget rule, the amount you should allocate to “needs”, i.e. the things you would necessarily need is Rs 40,000 (Rs 40,000 x 0.50). The amount you should allocate to “wants” is Rs 24,000 (Rs 80,000 x 0.30). The amount you should allocate to financial goals i.e. savings and investments is Rs 16,000 (Rs 80,000 x 0.20).</p>
          <h3 id="plan-your-budget-around-these-numbers"><li>Plan your budget around these numbers</li></h3>
          <p>Consider these three spending areas as “buckets” that you can fill up with regular expenses. Check to see if you are spending less or more than the monthly spending goals you set in the previous stage by listing and adding your monthly expenses under each category they belong in.</p>
          <h3 id="follow-your-budget"><li>Follow your budget</li></h3>
          <p>Track your expenses each month, and adjust as necessary to stay within your budget moving forward.</p>
          <h2 id="why-is-the-50-30-20-budget-rule-the-most-effective-budget-">Why is the 50/30/20 Budget Rule the most effective Budget?</h2>
          <h3 id="50-30-20-budget-rule-is-simple-and-easy-to-follow">50/30/20 Budget Rule is simple and easy to follow</h3>
          <p>The 50/30/20 rule is straightforward and easy to understand, making it accessible to anyone looking to create a budget. This simplicity makes it less daunting to get started with budgeting, and easier to maintain over time.</p>
          <h3 id="50-30-20-budget-rule-prioritises-necessities">50/30/20 Budget Rule prioritises necessities</h3>
          <p>The 50% allocated for necessities ensures that you are taking care of your basic needs, such as housing, food, medicines, and other necessary utilities. By prioritising these expenses, you can better manage your finances and avoid going into debt or struggling to make ends meet.</p>
          <h3 id="50-30-20-budget-rule-allows-for-discretionary-spending">50/30/20 Budget Rule Allows for discretionary spending</h3>
          <p>The 30% allocated for discretionary spending gives you some flexibility to enjoy life and spend money on things you enjoy or things that make your life smoother. This can include things like entertainment, hobbies, or travel. This flexibility can help you avoid feeling like you’re constantly depriving yourself, which can lead to overspending or burnout.</p>
          <h3 id="50-30-20-budget-rule-prioritises-savings-and-debt-repayment">50/30/20 Budget Rule prioritises savings and debt repayment</h3>
          <p>The 20% allocated for savings and debt repayment ensures that you’re <em>working towardsc long-term financial stability</em>. By saving and paying off debt, you can better prepare for emergencies and future expenses.</p>
          <h3 id="50-30-20-budget-rule-is-highly-customizable">50/30/20 Budget Rule is highly customizable</h3>
          <p>While the 50/30/20 rule provides a useful starting point, it’s also flexible enough to be adapted to your individual circumstances. For example, you may need to allocate more than 50% of your income to necessities, or you may need to adjust the percentages based on your income level or financial goals.</p>
          <h2 id="following-50-30-20-budget-rule-can-be-difficult-if-your-income-is-low">Following 50/30/20 Budget Rule Can Be Difficult if your income is low</h2>
          <p>If you’re earning just enough to make ends meet, you may struggle to save 20% of your income regardless of how you live, especially if you’re supporting a family. In that case you can follow the 70:20:10 budget rule. The 70:20:10 budget rule is the best budget if your income is low. Spend up to 70% of your after-tax income on needs and obligations that you must-have or must-do. The remaining 30% should be split up between 10% savings and 20% to everything else that you might want.</p>
          <h2 id="your-savings-might-not-be-enough-with-50-30-20-budget-rule">Your Savings Might Not Be Enough with 50/30/20 Budget Rule</h2>
          <p>On the flip side, if you have big goals, like retiring early or buying a big house, 20% might not be enough. In that case, we suggest that you keep your initial savings to 20% of your after-tax income and then increase this savings each year by 0.4%.</p>
        </section>
      }
    />
  );
};

export default BudgetRule;
