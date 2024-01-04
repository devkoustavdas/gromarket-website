import Heading from '../components/BlogMarkdown/Heading';
import Box from '../components/Html.jsx/Box';
import ResourceList from "../Resources/ResourceList";
import Share from '../components/Html.jsx/Share';

const MonthlyBudgetSpreadsheet = () => {
  return (
    <main className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5">
        <Heading
          title={"Free Monthly Budget Spreadsheet Template (available for Excel & Google Sheets)"}
          date={"6 December, 2023"}
          tag={["Personal Finance", "Template", "Budget"]}
        />
        <div className='lg:flex flex-row'>
          <section>
            <Share
              title={
                "Free Monthly Budget Spreadsheet Template (available for Excel & Google Sheets)"
              }
              link={"free-monthly-budget-spreadsheet-template"}
            />
            <Box
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
            />
          </section>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <ResourceList />
      </div>
    </main>
  )
}

export default MonthlyBudgetSpreadsheet;
