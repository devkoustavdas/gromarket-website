import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from 'react';
import Share from "../../components/Html.jsx/Share";
import Meta from "../../components/Html.jsx/Meta";
import Subscribe from "../../components/Html.jsx/Subscribe";
import StocksList from "../StocksCode/StocksList";
import globalstyles from "../../content.module.css";

const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 4,
    });

    return formatter.format(amount);
};

const StockTemplate = ({ stock, date, link, stockstable, content }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    const description = `${stock["name"]} Performance: ${stock["name"]} Index Today (${date}), Week, Month, Year Change, Support and Resistant levels, and all other technicals`;
    return (
        <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 shadow-lg m-3 rounded-lg px-3 md:px-5 py-4">
                <Meta title={`Today's (${date}) ${stock["name"]} Full Analysis`} link={`stocks/${link}`} description={description} />
                <header className="bg-slate-800 py-4 px-5 w-fit rounded-md">
                    <h1 title={`${stock["name"]} Daily Analysis by GroMarket`} className="text-slate-300 font-title font-semibold text-2xl">
                        {stock["name"]} <span className="select-none text-base text-indigo-300 font-normal">NSE: {stock["nse"]}</span> <span className="sr-only">Daily Analysis of {date}</span>
                    </h1>

                    <div className="align-middle">
                        <span className="text-3xl font-body font-semibold text-slate-400 mr-6">
                            {formatCurrency(stock["price"])}
                        </span>
                        <span title={`${stock["name"]} Share price as of ${date}`} style={{
                            color: stock["change"] > 0 ? "#34D399" : "#F87171",
                        }}>
                            {stock["change"] > 0 ? (<span>&#8593;</span>) : (<span>&#8595;</span>)}

                            <span className="pl-2">{formatCurrency(stock["change"])} ({stock["return"]}%)</span>
                        </span><span aria-description={`${stock["name"]} Share details as of ${date}`} className="rounded-circle text-xs border ml-3 font-sans px-1.5 text-slate-300 display">i</span>
                    </div>
                    <div className="text-sm">
                        MACD Signal <span style={{
                            color: stock["macd"] > 0 ? "#34D399" : "#F87171", }}
                        >{stock["macd"]}</span>
                    </div>
                </header>
                <div className='font-title text-sm w-11/12 leading-loose mt-5'>
                    <span className="hover:bg-slate-700 px-2 py-1 rounded duration-200" title='Go to GroMarket Home Page'><Link to="/" className="no-underline">Home</Link></span><span className="text-teal-500">/</span>
                    <span className="hover:bg-slate-700 px-2 py-1 rounded duration-200" title='Go to Stocks Analysis Page'><Link to="/stocks" className="no-underline">Stock Analysis</Link></span><span className="text-teal-500">/</span>
                    <span className='bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 duration-200'><Link to={`/stocks/${link}`} className="no-underline">{stock["name"]} Daily Analysis</Link></span>
                </div>
                <Share
                    title={`Today's (${date}) ${stock["name"]} Full Analysis`}
                    link={`stocks/${link}`} />

                <section className="mt-6">
                    <h1 className="text-center w-11/12 mb-2 text-slate-300">
                        {stock["name"]} Technical Analysis (All Data for {date})
                    </h1>

                    <div className="flex flex-col text-slate-300">
                        <div className="flex flex-row">
                            <div className="">
                                <h2 className="text-indigo-300 font-title text-center mt-2">{stock["name"]} PRICE ANALYSIS</h2>
                                <div className="flex flex-col">
                                    <div className="flex flex-row mx-auto">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Day Open</div>
                                            <div className="font-body text-lg">{formatCurrency(stock["open"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Day High</div>
                                            <div className="font-body text-lg">{formatCurrency(stock["high"])}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mx-auto">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Day Low</div>
                                            <div className="font-body text-lg">{formatCurrency(stock["low"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Day Change</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["change"] > 0 ? "#34D399" : "#F87171",
                                            }}>{stock["change"] > 0 ? (<span>&#8593;</span>) : (<span>&#8595;</span>)}

                                                <span className="pl-2">{formatCurrency(stock["change"])} ({stock["return"]}%)</span></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">1 Month Change</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["monthchange"] > 0 ? "#34D399" : "#F87171",
                                            }}>{stock["monthchange"] > 0 ? (<span>&#8593;</span>) : (<span>&#8595;</span>)}&nbsp;{formatCurrency(stock["monthchange"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">3 Month Change</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["threemonthchange"] > 0 ? "#34D399" : "#F87171",
                                            }}>{stock["threemonthchange"] > 0 ? (<span>&#8593;</span>) : (<span>&#8595;</span>)}&nbsp;{formatCurrency(stock["threemonthchange"])}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2">
                                <h2 className="text-indigo-300 font-title text-center">{stock["name"]} EMA & SMA (Moving Averages)</h2>
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">SMA 5 day</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["sma5"] < stock["price"] ? "#34D399" : "#F87171",
                                            }}>{formatCurrency(stock["sma5"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">SMA 20 day</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["sma20"] < stock["price"] ? "#34D399" : "#F87171",
                                            }}>{formatCurrency(stock["sma20"])}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">SMA 200 day</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["sma200"] < stock["price"] ? "#34D399" : "#F87171",
                                            }}>{formatCurrency(stock["sma200"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">EMA 5 day</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["ema5"] < stock["price"] ? "#34D399" : "#F87171",
                                            }}>{formatCurrency(stock["ema5"])}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">EMA 50 day</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["ema50"] < stock["price"] ? "#34D399" : "#F87171",
                                            }}>{formatCurrency(stock["ema50"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">EMA 200 day</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["ema200"] < stock["price"] ? "#34D399" : "#F87171",
                                            }}>{formatCurrency(stock["ema200"])}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="">
                                <h2 className="text-indigo-300 font-title text-center mt-2">{stock["name"]} PERFORMANCE ANALYSIS</h2>
                                <div className="flex flex-col">
                                    <div className="flex flex-row mx-auto">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Divident Yield</div>
                                            <div className="font-body text-lg">{`${stock["divident"]}%`}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">P/E Ratio</div>
                                            <div className="font-body text-lg">{stock["pe"]}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mx-auto">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Price to Book value</div>
                                            <div className="font-body text-lg">{formatCurrency(stock["pb"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Market Cap</div>
                                            <div className="font-body text-lg">{`${formatCurrency(stock["mcap"])} Cr.`}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">CAGR 1Yr</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["cagr1yr"] > 0 ? "#34D399" : "#F87171",
                                            }}>{`${stock["cagr1yr"]}%`}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">CAGR 5Yr</div>
                                            <div className="font-body text-lg" style={{
                                                color: stock["cagr5yr"] > 0 ? "#34D399" : "#F87171",
                                            }}>{`${stock["cagr5yr"]}%`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2">
                                <h2 className="text-indigo-300 font-title text-center">{stock["name"]} RESISTANCE AND SUPPORT</h2>
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">First Resistance</div>
                                            <div className="font-body text-lg text-red-400">{formatCurrency(stock["r1"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Second Resistance</div>
                                            <div className="font-body text-lg text-red-400">{formatCurrency(stock["r2"])}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Third Resistance</div>
                                            <div className="font-body text-lg text-red-400">{formatCurrency(stock["r3"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">First Support</div>
                                            <div className="font-body text-lg text-green-400">{formatCurrency(stock["s1"])}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Second Support</div>
                                            <div className="font-body text-lg text-green-400">{formatCurrency(stock["s2"])}</div>
                                        </div>
                                        <div className="min-w-44 max-w-44 flex flex-col text-center justify-center bg-slate-800 hover:bg-slate-700 m-2 border-0 py-3 rounded-md font-normal">
                                            <div className="font-sans text-indigo-300 italic">Third Support</div>
                                            <div className="font-body text-lg text-green-400">{formatCurrency(stock["s3"])}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h2 className="text-slate-300 text-center mt-3">{description}</h2>

                </section>
                <section className={globalstyles.content}>
                    <div>
                        <h3>{(stock["ema50"] > stock["ema200"]) ? "EMA 50 > EMA 200" : "EMA 200 > EMA 50"} in {stock["name"]}</h3>    
                        <p>{(stock["ema50"] > stock["ema200"]) ? "This suggests that there was a Golden Cross. The golden cross refers to when the 50 period moving average breaks through and above the 200 period moving average. Traders can take a trade of 1 to 3 month as per this." : "This suggests that there was a Death Cross. The Death Cross refers to when the 50 period moving average crosses below the 200 period moving average."}</p>
                    </div>
                    <div>
                        <h3>{(stock["macd"] > 0) ? "Day MACD Signal > 0" : "Day MACD Signal < 0"} in {stock["name"]}</h3>
                        <p>{(stock["macd"] > 0) ? "MACD is above its Signal and Center Line, this is a strong bullish indicator." : "MACD is below its Signal and Center Line, this is a strong bearish indicator."}</p>
                    </div>
                    {stockstable}
                    {content != "" ? <div>
                        <p>{content}</p>
                    </div>:""}
                </section>
                <Subscribe />
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <div className="w-19/20 mx-auto lg:w-2/5">
                    <div className='text-xl font-sans text-center mt-5 mb-3 font-bold text-teal-500'>Explore More Stock Analysis</div>
                    <StocksList type={"part"} />
                </div>
            </React.Suspense>
        </main>
    );
}
StockTemplate.propTypes = {
    stock: PropTypes.shape({
        name: PropTypes.string,
        nse: PropTypes.string,
        price: PropTypes.number,
        open: PropTypes.number,
        high: PropTypes.number,
        low: PropTypes.number,
        pe: PropTypes.number,
        pb: PropTypes.number,
        divident: PropTypes.number,
        mcap: PropTypes.number,
        change: PropTypes.number,
        monthchange: PropTypes.number,
        threemonthchange: PropTypes.number,
        return: PropTypes.number,
        cagr1yr: PropTypes.number,
        cagr5yr: PropTypes.number,
        macd: PropTypes.number,
        ema5: PropTypes.number,
        ema50: PropTypes.number,
        ema200: PropTypes.number,
        sma5: PropTypes.number,
        sma20: PropTypes.number,
        sma200: PropTypes.number,
        r1: PropTypes.number,
        r2: PropTypes.number,
        r3: PropTypes.number,
        s1: PropTypes.number,
        s2: PropTypes.number,
        s3: PropTypes.number,
    }).isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    stockstable: PropTypes.string,
    content: PropTypes.string,
};
export default StockTemplate;
