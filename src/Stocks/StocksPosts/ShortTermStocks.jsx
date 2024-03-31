import StockBox from "../../components/Html.jsx/StocksTable";

const ShortTermStocks = () => {
  return (
    <main>
      <div className="mx-4">
        <div className="w-full max-w-4xl mx-auto bg-slate-700 shadow-md rounded-md border  px-5 py-4">
          <h2 className="text-3xl font-title mb-2 text-indigo-500">Best Short Term Stocks to Buy Now</h2>
          <h3 className="text-justify">We have selected the best short term stocks based on 12 most impotant deciding factors. These stocks are priced below their long-term average, have high returns on investment, have moderate price-to-earnings ratios, generate positive cash flow, manage debt well, show healthy sales growth and profits, and have no pledged shares. These stocks are expected to show proper growth in the next 6 months to a year.</h3>
          <p className="text-xs bg-indigo-500 text-white max-w-fit px-4 py-1 rounded-md mt-2">23-02-2024</p>
        </div>
      </div>
      <StockBox stock={['Aptech', 240.0, 276.11, 1391.84, 35.09, -14.32, 22.17, 0.08, 24.85]} />
      <StockBox stock={['KNR Construct.', 264.0, 264.24, 7424.6, 20.77, 13.84, 13.42, 0.25, 92.57]} />
      <StockBox stock={['Gandhar Oil Ref.', 265.0, 284.2, 2593.55, 37.34, 0.42, 13.64, 0.48, 37.53]} />
      <StockBox stock={['Likhitha Infra.', 266.0, 276.31, 1049.37, 36.15, 10.39, 16.51, 0.0, 109.21]} />
      <StockBox stock={['Saksoft', 276.0, 294.6, 2925.9, 28.41, 12.33, 29.87, 0.03, 46.27]} />
      <StockBox stock={['Flair Writing', 282.5, 400.34, 2977.42, 33.56, -4.02, 26.68, 0.25, 90.59]} />
      <StockBox stock={['KRBL', 348.95, 367.25, 7987.12, 20.88, -6.44, 13.32, 0.02, 54.0]} />
      <StockBox stock={['Blue Jet Health', 364.0, 386.3, 6314.14, 35.41, -1.3, 39.6, 0.0, 64.75]} />
      <StockBox stock={['JK Paper', 380.45, 381.31, 6444.91, 28.46, 3.84, 5.73, 0.54, 24.09]} />
      <StockBox stock={['Dreamfolks Servi', 500.0, 526.44, 2612.51, 76.91, 49.54, 33.99, 0.01, 2737.76]} />
      <StockBox stock={['PSP Projects', 700.0, 744.74, 2520.0, 24.75, 40.06, 16.26, 0.46, 6631.58]} />
      <StockBox stock={['Expleo Solutions', 1366.65, 1376.1, 2121.01, 38.83, 4.17, 20.78, 0.05, 155.23]} />
      <StockBox stock={['Automotive Axles', 1907.9, 2169.17, 2882.84, 30.81, -17.45, 16.68, 0.03, 120.86]} />
      <StockBox stock={['Kingfa Science', 2018.65, 2072.09, 2444.68, 24.72, 15.7, 19.47, 0.05, 1545.93]} />
      <StockBox stock={['Craftsman Auto', 4430.35, 4455.92, 9360.58, 20.58, 50.82, 29.27, 0.99, 43.06]} />
      <StockBox stock={['P & G Health Ltd', 5015.0, 5041.17, 8324.9, 45.47, 0.0, 36.73, 0.01, 47.47]} />
    </main>
  )
}

export default ShortTermStocks
