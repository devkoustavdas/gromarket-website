import StockTemplate from '../StockTemplate/StockTemplate';
const BankNifty = () => {

    const date = "22nd April, 2024";
    const stock = {
        name: "Nifty Bank",
        nse: "BANKNIFTY",
        price: 47924.90,
        change: 350.75,
        return: 0.74,
        open: 48145.70,
        high: 48146.30,
        low: 48145.70,
        monthchange: 2.7,
        threemonthchange: 4.1,
        sma5: [47565.3, 6],
        sma20: [47618.1, 6],
        sma200: [45685.5, 6],
        ema5: [47749.5, 3],
        ema50: [47208.5, 4],
        ema200: [45615.3, 6],
        divident: 0.77,
        pe: 16.0,
        pb: 2.80,
        mcap: 3814633,
        cagr1yr: 13.7,
        cagr5yr: 10.2,
        macd: 235.9,
        r1: 48171.3,
        r2: 48417.7,
        r3: 48689.2,
        s1: 47653.5,
        s2: 47382.0,
        s3: 47135.6,
    };
    const link = "banknifty-analysis";
    const content = "Bandhan Bank Ltd. showed a 4.2% day high, followed by Punjab National Bank with a 3.8% Day High and Axis Bank Ltd. with a 2.4% Day High. ICICI Bank Ltd. showed a change of 1.94%(BSE) and 1.82%(NSE) for the day, followed by Kotak Mahindra Bank Ltd with a 0.93% change(BSE) and 0.97% change(NSE). HDFC Bank Ltd showed change of -1.24%(BSE) and -1.25%(NSE). For Short Term Investors the market is Very Bullish. For Medium Term Investors the market is Very Bullish. For Long Term Investors the market is Bearish. Price is Near 52W High - a growth of 13.8% over 1 Year.";

    return (
        <main>
            <StockTemplate date={date} stock={stock} link={link} content={content} />
        </main>
    );
}

export default BankNifty;