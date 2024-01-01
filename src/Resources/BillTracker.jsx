import Heading from '../components/BlogMarkdown/Heading';
import Box from '../components/Html.jsx/Box';

const BillTracker = () => {
  return (
    <main>
      <Heading
        title={"Free Bill Tracker Template (available for Excel & Google Sheets)"}
        date={"24 December, 2023"}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-file-spreadsheet" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6h-3v2h3zm0 3h-3v2h3zm0 3h-3v2h2a1 1 0 0 0 1-1zm-4 2v-2H6v2zm-4 0v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3zm3-2v2h3V7zm3 3H6v2h3z" />
        </svg>}
      />
      <Box
        id={"free-bill-tracker-template"}
        head={"Free Bill Tracker Template"}
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
    </main>
  )
}

export default BillTracker;
