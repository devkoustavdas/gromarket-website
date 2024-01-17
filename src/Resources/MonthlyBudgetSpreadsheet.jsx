import ResourceTemplate from "./ResourceTemplate";
import Box from '../components/Html.jsx/Box';
import List from "../components/Html.jsx/List/List";

const MonthlyBudgetSpreadsheet = () => {
  return (
    <ResourceTemplate
      title="Free Monthly Budget Spreadsheet Template (available for Excel & Google Sheets)"
      date="6 December, 2023"
      tags={["Personal Finance", "Template", "Budget"]}
      link="free-monthly-budget-spreadsheet-template"
      content={
        <div>
          <p>Keep track of your personal expenses with the simple templates designed for personal use.</p>
          <Box head="Download and Use Free Monthly Budget Template" body={<List text={[" This simple monthly budget template makes budgeting fun and exciting.", "It comes complete with an easy-to-follow set of instructions so you can get started budgeting in no time.", "No need to reach for the calculator. The budgeting spreadsheet performs the calculations automatically.", "Access your budget spreadsheet online from anywhere so you never forget to track an expense."]} />} />
          <p>This handy spreadsheet lets you check how your spending matches up with your budget each month. You can easily print it on one page in a vertical layout. It shows the difference between what you planned to spend and what you actually spent. This way, you can quickly see where you might be spending more than you budgeted for. Keep things simple and clear by focusing on your budget throughout.</p>
          <hr />
          <p>This budgeting  spreadsheet is versatile and user-friendly. It's perfect for college students looking to manage their money effortlessly, parents aiming to oversee household expenses with the handy family budget template, and creative professionals seeking a budgeting tool that serves as both a wedding budget and an event budget template. Whether you're planning for school, family life, or special occasions, this spreadsheet makes budgeting a breeze for everyone.</p>
          <Box
            head={"What’s Inside The Monthly Budget Template"}
            body={<List text={["Detailed instructions on how to use the budget spreadsheet.", "Budget dashboard with 3 different charts and helpful summaries.", "Expense tracker where you can track your spending by category(and add expenses to your budget automatically).", "Quick summary of main budget categories so you know how much you have left to spend in each of them.", "Budgeting tools & resources that will help you improve your budgeting skills."]} />}
          />
        </div>
      }
    />
  );
}

export default MonthlyBudgetSpreadsheet;
