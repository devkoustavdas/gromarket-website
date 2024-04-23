import StockTemplate from '../StockTemplate/StockTemplate';
const Nifty50 = () => {

    const date = "23rd April, 2024";
    const stock = {
        name: "Nifty 50",
        nse: "NIFTY",
        price: 22368.00,
        change: 31.60,
        return: 0.14,
        open: 22447.05,
        high: 22447.55,
        low: 22349.45,
        monthchange: 1.2,
        threemonthchange: 3.7,
        sma5: [22199.0, 1],
        sma20: [22339.6, 1],
        sma200: [20671.3, 6],
        ema5: [22292.2, 6],
        ema50: [22129.0, 5],
        ema200: [20822.4, 5],
        divident: 1.19,
        pe: 22.8,
        pb: 3.92,
        mcap: 17950523,
        cagr1yr: 26.7,
        cagr5yr: 13.8,
        macd: 34.5,
        r1: 22427.2,
        r2: 22486.4,
        r3: 22525.3,
        s1: 22329.1,
        s2: 22290.2,
        s3: 22231.0,
    };
    const link = "nifty50-analysis";
    const content = <ul>
        <li>Bharti Airtel Ltd. is showing promising results with a 3.45% gain for the day and 8.6% gain over 1 Month. The stock shows can be traded with First Resistance at ₹1361.5 and First Support ₹1312.6. 
        </li>
        <li>Maruti Suzuki India Ltd. was a Strong Performer of the day with a gain of ₹210.75 (1.65%). The stock showed a gain of 30.3% over 3 Months</li>
        <li>HDFC Bank Ltd. showed a drop of -0.30% today. Yesterday it closed at a drop of -1.25%. The stock has strong upside potential.
        </li>
        <li>The day&#39;s high near the closing price suggests a potential &quot;Buyers Zone,&quot; indicating increased buying interest.
        </li>
        <li>Reliance Industries reported fourth-quarter profit above analysts&#39; estimates on Monday and a gain was expected but initially Reliance Industries showed a high of ₹3,025 but then dropped finally settling at ₹2,919 (-1.39%). The YoY Quaterly Profit Growth for the company is -1.34%.
        </li>
        <li>Infosys Ltd. has an upcoming dividend of ₹20.00 per share due on 31 May 2024. Infosys Ltd. showed a gain of ₹9.65 (0.67%) for the day.</li>
        <li>The next board meeting for Hindustan Unilever Ltd. is on 24 Apr 2024 for the purpose of Audited Results & Final Dividend. So for the next day this Hindustan Unilever Ltd. might show a gain based on the meeting report.</li>
        <li>For Short Term Investors, the market is Very Bearish. For Medium Term Investors the market is Neutral. For Long Term Investors the market is Bullish. Price is Near 52W High - a growth of 26.9% over 1 Year.
        </li>
    </ul>;

    return (
        <main>
            <StockTemplate date={date} stock={stock} link={link} content={content} />
        </main>
    );
}

export default Nifty50;