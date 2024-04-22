import StockTemplate from '../StockTemplate/StockTemplate';
const Nifty50 = () => {

    const date = "22nd April, 2024";
    const stock = {
        name: "Nifty 50",
        nse: "NIFTY",
        price: 22336.40,
        change: 189.40,
        return: 0.86,
        open: 22336.90,
        high: 22375.65,
        low: 22198.15,
        monthchange: 1.5,
        threemonthchange: 3.5,
        sma5: [22179.9, 1],
        sma20: [22313.2, 1],
        sma200: [20655.4, 6],
        ema5: [22254.4, 3],
        ema50: [22119.3, 4],
        ema200: [20806.8, 6],
        divident: 1.20,
        pe: 22.7,
        pb: 3.88,
        mcap: 17789022,
        cagr1yr: 26.6,
        cagr5yr: 14.0,
        macd: 32.4,
        r1: 22408.7,
        r2: 22480.9,
        r3: 22586.2,
        s1: 22231.2,
        s2: 22125.9,
        s3: 22053.7,
    };
    const link = "nifty50-analysis";
    const content = "Bharat Petroleum Corporation Ltd. showed a 3.0% day high, followed by Tata Consumer Products Ltd. with a 2.9% Day High. Infosys Ltd. showed a change of 1.48% for the day, followed by ICICI Bank Ltd. with a 1.94% change. For Short Term Investors the market is Very Bearish. For Medium Term Investors the market is Neutral. For Long Term Investors the market is Bullish. Price is Near 52W High - a growth of 26.7% over 1 Year.";

    return (
        <main>
            <StockTemplate date={date} stock={stock} link={link} content={content} />
        </main>
    );
}

export default Nifty50;