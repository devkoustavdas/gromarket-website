import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Ticker = () => {
    const items = [
        ["MACD and EMA - The perfect Free Indicator Combo for your Breakout Trades", "/blogs/ema-and-macd-for-intraday-trading"],
        ["Top Stocks in the Rs 1000 to Rs 2000 Price Range with potential growth (with great ROCE, ROE, Returns)", "/stocks/stocks-between-rs-1000-to-2000-with-growth-potential"],
        ["Amazon spends $2.75 billion on AI startup Anthropic in its largest venture investment yet", "/news/amazon-spends-on-startup-anthropic-claude"],
        ["Master Your Finances: Free Bill Tracker Template (available for Excel & Google Sheets)", "/resources/free-bill-tracker-template"],
        ["Free Monthly Budget Spreadsheet Template (available for Excel & Google Sheets)", "/resources/free-monthly-budget-spreadsheet-template"],
        ["Mastering the Art of Spending: How the 50/30/20 Budget Rule Can Help You Achieve Financial Freedom and Still Enjoy Your Life","/blogs/50-30-20-Budget-Rule"],
        ["Avoid These Bad Investment Habits to Secure Your Financial Future", "/blogs/bad-investment-habits-to-stay-away-from"],
    ]
    const [showTicker, setShowTicker] = useState(false);
    const [i, setI] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setShowTicker(true);
            } else {
                setShowTicker(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showTicker) {
            const interval = setInterval(() => {
                setI(prevIndex => (prevIndex + 1) % items.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [showTicker, items.length]);

    return (
        <React.Fragment>
            {showTicker && (
                <section className="fixed top-0 text-shadow bg-slate-700 text-slate-300 py-2 w-full px-4 z-30">
                    <Link to={items[i][1]}>
                        <span className="font-title">Trending 🔥</span> <p>{items[i][0]}</p>
                    </Link>
                </section>
            )}
        </React.Fragment>
    )
}

export default Ticker;
