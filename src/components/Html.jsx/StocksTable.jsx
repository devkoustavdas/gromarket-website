
import PropTypes from 'prop-types';

const StocksTable = ({ stock }) => {

    const convertToIndianCurrency = (number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(number);
    };

    return (
        <section className="antialiased text-slate-400 my-5 px-4">
            <div className="flex flex-col justify-center h-full">

                <div className="w-full max-w-4xl mx-auto bg-slate-800 shadow-lg rounded-md border border-slate-600">
                    <div className="px-5 py-4 border-b border-slate-600 text-slate-300">
                        <div className="float-right font-body" title='Current Stock Price'>{convertToIndianCurrency(stock[1])}</div>
                        <h4 className="font-sans text-lg">{stock[0]} <span className='sr-only'>Stock Details</span></h4>
                    </div>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-sm font-medium bg-slate-700 text-slate-400">
                                    <tr className="font-title text-left">
                                        <th className="p-2 whitespace-nowrap" title="200-Day Moving Average">200 DMA</th>
                                        <th className="p-2 whitespace-nowrap" title="Return On Equity">ROE</th>
                                        <th className="p-2 whitespace-nowrap" title="Market Capitalisation">Mar Cap</th>
                                        <th className="p-2 whitespace-nowrap" title="Return on Capital Employed">ROCE</th>
                                        <th className="p-2 whitespace-nowrap" title="YOY Quaterly Sales Growth">Qtr Sales Var</th>
                                        <th className="p-2 whitespace-nowrap" title="Debt-to-Equity (D/E) Ratio">D/E</th>
                                        <th className="p-2 whitespace-nowrap" title="Price to Free Cash Flow Ratio">CMP/FCF</th>
                                        <th className="p-2 whitespace-nowrap" title="Divident Yield">Div Yld</th>
                                    </tr>
                                </thead>
                                <tbody className="text-base text-left divide-y divide-slate-400">
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">{convertToIndianCurrency(stock[2])}</td>
                                        <td className="p-2 whitespace-nowrap">{stock[3]} %</td>
                                        <td className="p-2 whitespace-nowrap">{convertToIndianCurrency(stock[4])} Cr</td>
                                        <td className="p-2 whitespace-nowrap">{stock[5]} %</td>
                                        <td className="p-2 whitespace-nowrap">{stock[6]} %</td>
                                        <td className="p-2 whitespace-nowrap">{stock[7]}</td>
                                        <td className="p-2 whitespace-nowrap">{stock[8]} </td>
                                        <td className="p-2 whitespace-nowrap">{stock[9]} %</td>
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
StocksTable.propTypes = {
    stocks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default StocksTable;
