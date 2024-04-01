import BlogTemplate from '../BlogTemplate';
import Img from "../../components/Html.jsx/Img";
import styles from "../../content.module.css";

const BadInvestmentHabits = () => {
  return (
      <BlogTemplate
          title="Avoid These Bad Investment Habits to Secure Your Financial Future"
          description={"Secure your financial future by avoiding bad investment habits: shun impatience, chase trends, be aware of fees, stay consistent, and diversify wisely."}
          date={"30/03/2024"}
          tag={["Investment", "Intraday Trading"]}
          link={"bad-investment-habits-to-stay-away-from"}
          content={
              <section className={styles.content}>
                  <Img name='Bad-Investment-Habits-to-stay-away-from.avif' describe={"Avoid These Bad Investment Habits to Secure Your Financial Future"} />
                  <p>Investing wisely is key to building wealth and securing a stable financial future. However, certain bad habits could hamper your financial journey and hinder your growth. By recognising and avoiding these dangers, you can protect your investments and maximise your rewards. Let&apos;s look at the negative investment habits to avoid, as well as ways for overcoming them.</p>
                  <h2>1. Unawareness: Being unaware of the market and where you are investing in as a Retail Investor</h2>
                  <p>Neglecting Factors like <em>Taxes, Investment Fees, Exit Loads</em> are one of the common mistakes investors. High fees can significantly decrease your investment gains over time. Similarly, failing to consider the tax implications of your investments can lead to missed opportunities for tax optimization and higher tax liabilities. </p>
                  <p>For instance, let's say you invest Rs 1,20,000 annually in <strong>SBI Multicap Fund Direct - Growth</strong> for 10 years, earning a 14% annual rate of return. Due to its expense ratio of 0.93%, you could end up losing around Rs 1.5 lakh in fees alone. Additionally, if you redeem your investment within 1 year, you'll face an exit load of 1%. Moreover, taxes vary depending on the duration of holding; short-term taxes are 15% of profits, while long-term taxes are 10%.</p>
                  <p>To avoid this habit, know about the various fees associated with different investment vehicles, such as mutual funds, exchange-traded funds (ETFs), and brokerage accounts. There are <strong><em>ELSS</em></strong> funds which are equity funds that allow you to save tax while you invest for your long term goals. Sovereign gold bonds offer a tax-efficient alternative to physical gold investments.</p>
              </section>
          }
      />
  )
}

export default BadInvestmentHabits;
