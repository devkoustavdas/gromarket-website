import StockTemplate from '../StockTemplate/StockTemplate';
const NiftyFMCG = () => {
    
    const date = "22nd April, 2024";
    const stock = {
        name: "Nifty FMCG",
        nse: "CNXFMCG",
        price: 53499.45,
        change: 444.05,
        return: 0.84,
        open: 53318.90,
        high: 53594.60,
        low: 53128.20,
        monthchange: 0.3,
        threemonthchange: -4.4,
        sma5: [53191.5,2],
        sma20: [53612.3,2],
        sma200: [52724.6,0],
        ema5: [53319.3,1],
        ema50: [53888.6,3],
        ema200: [52724.6,4],
        divident: 1.94,
        pe: 41.6,
        pb: 10.8,
        mcap: 2251414,
        cagr1yr: 14.6,
        cagr5yr: 11.9,
        macd: -181.9,
        r1: 53686.6,
        r2: 53873.8,
        r3: 54153.0,
        s1: 53220.2,
        s2: 52941.0,
        s3: 52753.8,
        };
    const link = "niftyfmcg-analysis";
    const content = "United Spirits Ltd. showed a 3.3% day high, followed by Tata Consumer Products Ltd. with a 2.9% Day High. Varun Beverages Ltd. is showing promising results for the week followed by Tata Consumer Products Ltd. and Dabur India Ltd. For Short Term Investors the market is Bearish. For Medium Term Investors the market is Neutral. For Long Term Investors the market is Bullish. A growth of 14.6% over 1 Year. Nifty FMCG Has hit new 1 Week High today. Previous 1 Week High was made on 18 April, 2024.";

    return (
        <main>
            <StockTemplate date={date} stock={stock} link={link} content={content} />
        </main>
    );
}

export default NiftyFMCG;