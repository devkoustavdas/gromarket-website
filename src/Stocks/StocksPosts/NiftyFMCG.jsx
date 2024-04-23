import StockTemplate from '../StockTemplate/StockTemplate';
const NiftyFMCG = () => {
    
    const date = "23rd April, 2024";
    const stock = {
        name: "Nifty FMCG",
        nse: "CNXFMCG",
        price: 53905.30,
        change: 405.85,
        return: 0.76,
        open: 53622.00,
        high: 57967.00,
        low: 46808.00,
        monthchange: 0.2,
        threemonthchange: -3.7,
        sma5: [53337.6,2],
        sma20: [53657.9,2],
        sma200: [53341.4,0],
        ema5: [53514.7,6],
        ema50: [53889.2,0],
        ema200: [52736.3,2],
        divident: 1.87,
        pe: 42.2,
        pb: 11,
        mcap: 2288182,
        cagr1yr: 15.4,
        cagr5yr: 12,
        macd: -134.6,
        r1: 54121.0,
        r2: 54336.7,
        r3: 54635.5,
        s1: 53606.5,
        s2: 53307.7,
        s3: 53092.0,
        };
    const link = "niftyfmcg-analysis";
    const content =
            <>
            <strong>Varun Beverages Ltd.</strong>
            <ul>
                <li>Gain of ₹0.65 (0.05%).</li>
                <li>This stock is bullish in nature, strong in quality, and technical aspects.</li>
            </ul>
            <strong>Nestle India Ltd.</strong>
            <ul>
                <li>Gain of ₹42.55 (1.73%).</li>
                <li>52-week low on Apr 25, 2023, but has recovered since then.</li>
                <li>The next board meeting for Nestle India Ltd. is on Apr 25, 2024, for Audited Results & Final Dividend. Keep an eye on this stock.</li>
            </ul>
            <strong>Hindustan Unilever Ltd.</strong>
            <ul>
                <li>The next board meeting is on Apr 24, 2024, for Audited Results & Final Dividend.</li>
                <li>Expect potential gains based on the meeting report.</li>
            </ul>
            <strong>ITC Ltd.</strong>
            <ul>
                <li>Gain of ₹3.90 (0.92%).</li>
                <li>52-week low on Mar 12, 2024. The stock is currently in the sell zone.</li>
            </ul>
            </>

    return (
        <main>
            <StockTemplate date={date} stock={stock} link={link} content={content} />
        </main>
    );
}

export default NiftyFMCG;