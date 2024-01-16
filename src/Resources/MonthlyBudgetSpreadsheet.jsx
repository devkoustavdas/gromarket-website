import ResourceTemplate from "./ResourceTemplate";
import Box from '../components/Html.jsx/Box';
const MonthlyBudgetSpreadsheet = () => {
  return (
    <ResourceTemplate
      title={"Free Monthly Budget Spreadsheet Template (available for Excel & Google Sheets)"}
      date={"6 December, 2023"}
      tags={["Personal Finance", "Template", "Budget"]}
      link={"free-monthly-budget-spreadsheet-template"}
      content={<Box
        id={"free-monthly-budget-template"}
        head={"Free Monthly Budget Template"}
        body={
          <ul>
            <li>
              This simple monthly budget template makes budgeting fun and
              exciting.
            </li>
            <li>
              It comes complete with an easy-to-follow set
              of instructions so you can get started budgeting in no time.
            </li>
            <li>
              No need to reach for the calculator. The budgeting spreadsheet
              performs the calculations automatically.
            </li>
            <li>
              Access your budget spreadsheet online from anywhere so you never
              forget to track an expense.
            </li>
          </ul>
        }
      />}
     />
  )
}

export default MonthlyBudgetSpreadsheet;
