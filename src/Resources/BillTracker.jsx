import ResourceTemplate from "./ResourceTemplate";
import styles from "../content.module.css";

const BillTracker = () => {
  return (
    <ResourceTemplate
      title="Free Bill Tracker Template (available for Excel & Google Sheets)"
      date="24/12/2023"
      tags={["Personal Finance", "Template", "Budget"]}
      link="free-bill-tracker-template"
      content={
        <section className={styles.content}>
          <div>
            <h2>Features of Free Bill Tracker Template</h2>
            <ul>
              <li>Track bills and payments conveniently</li>
              <li>Available for Excel & Google Sheets</li>
              <li>User-friendly interface</li>
              <li>Customizable categories for bills</li>
              <li>Automatic calculation of total expenses</li>
              <li>Color-coded status for pending and paid bills</li>
              <li>Monthly and yearly summaries</li>
              <li>Ability to add notes or comments</li>
              <li>Secure and private data storage</li>
              <li>Compatible with multiple devices</li>
              <li>Free to download and use</li>
            </ul>
          </div>
        </section>
      }
    />
  );
}
export default BillTracker;
