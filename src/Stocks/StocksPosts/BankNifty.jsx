import StockTemplate from '../StockTemplate/StockTemplate';
const BankNifty = () => {

    const date = "23rd April, 2024";
    const stock = {
        name: "Nifty Bank",
        nse: "BANKNIFTY",
        price: 47970.45,
        change: 45.55,
        return: 0.10,
        open: 48299.60,
        high: 48302.70,
        low: 47899.30,
        monthchange: 2.4,
        threemonthchange: 4.2,
        sma5: [47604.8, 2],
        sma20: [47701.1, 2],
        sma200: [45701.6, 6],
        ema5: [47823.1, 6],
        ema50: [47238.4, 5],
        ema200: [45638.7, 5],
        divident: 0.77,
        pe: 15.8,
        pb: 2.82,
        mcap: 3848095,
        cagr1yr: 13.8,
        cagr5yr: 9.94,
        macd: 232.4,
        r1: 48215.7,
        r2: 48460.9,
        r3: 48619.1,
        s1: 47812.3,
        s2: 47654.1,
        s3: 47408.9,
    };
    const link = "banknifty-analysis";
    const content = <ul>
        <li>
            State Bank of India has been a Strong Performer and showed a ₹773 (0.90%) gain. The stock has strong upside potential.
        </li>
        <li>
            Punjab National Bank has been a Strong Performer but showed a ₹-0.25 (-0.19%) loss. The stock is now in sell zone.
        </li>
        <li>HDFC Bank Ltd. showed a drop of -0.30% today. Yesterday it closed at a drop of -1.25%. The stock has strong upside potential.
        </li>
        <li>
            ICICI Bank Ltd. showed a ₹3.60 (0.33%) gain. The next board meeting for ICICI Bank Ltd. is on 27 Apr 2024 for the purpose of Audited Results & Final Dividend.
        </li>
        <li>For Short Term Investors the market is Very Bullish. For Medium Term Investors the market is Very Bullish. For Long Term Investors the market is Bearish. Price is Near 52W High - a growth of 13.9% over 1 Year.
        </li>
    </ul>
;

    return (
        <main>
            <StockTemplate date={date} stock={stock} link={link} content={content} />
        </main>
    );
}

export default BankNifty;