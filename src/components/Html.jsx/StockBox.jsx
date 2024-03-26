const StockBox = ({stock}) => {
    const convertToIndianCurrency = (number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(number);
    };

    return (
      <section className="antialiased bg-gray-100 text-gray-600 my-5 px-4">
          <div className="flex flex-col justify-center h-full">

              <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-md border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold font-sans text-lg text-gray-800">{stock[0]}</h2>
                  </header>
                  <div className="p-3">
                      <div className="overflow-x-auto">
                          <table className="table-auto w-full">
                              <thead className="text-sm font-semibold text-gray-500 bg-gray-50">
                                    <tr className="font-semibold text-left">
                                        <th className="p-2 whitespace-nowrap" title="Current Price of the Stock">Current Price</th>
                                        <th className="p-2 whitespace-nowrap" title="200-Day Moving Average">200 DMA</th>
                                        <th className="p-2 whitespace-nowrap" title="Market Capitalisation">Market Capitalisation</th>
                                        <th className="p-2 whitespace-nowrap" title="Return on Capital Employed">ROCE</th>
                                        <th className="p-2 whitespace-nowrap" title="YOY Quaterly Sales Growth">Qtr Sales Var</th>
                                        <th className="p-2 whitespace-nowrap" title="Price-to-Earnings Ratio">P/E Ratio</th>
                                        <th className="p-2 whitespace-nowrap" title="Debt-to-Equity (D/E) Ratio">D/E Ratio</th>
                                        <th className="p-2 whitespace-nowrap" title="Price to Free Cash Flow Ratio">P/FCF Ratio</th>
                                    </tr>
                              </thead>
                              <tbody className="text-base text-left divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-green-500">{convertToIndianCurrency(stock[1])}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">{convertToIndianCurrency(stock[2])}</td>
                                        <td className="p-2 whitespace-nowrap">{convertToIndianCurrency(stock[3])} Cr</td>
                                        <td className="p-2 whitespace-nowrap">{stock[4]} %</td>
                                        <td className="p-2 whitespace-nowrap">{stock[5]} %</td>
                                        <td className="p-2 whitespace-nowrap">{stock[6]}</td>
                                        <td className="p-2 whitespace-nowrap">{stock[7]}</td>
                                        <td className="p-2 whitespace-nowrap">{stock[8]}</td>
                                    </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default StockBox
