import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Favicon from "react-favicon";
import { getUrl } from './util';

import '@fontsource/noto-serif-jp';
import '@fontsource/poppins';
import '@fontsource/barlow';

import Resources from './pages/Resources';
import Navbar from './components/Html.jsx/Navbar';
import Ticker from './components/Html.jsx/Ticker';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Footer from './pages/Footer';
import Blogs from './pages/Blogs';
import Stocks from './pages/Stocks';
import News from './pages/News';
import Careers from './pages/Careers';
import Disclaimer from './pages/Disclaimer';

import BackToTop from './components/Html.jsx/BackToTop/BackToTop';

import MonthlyBudgetSpreadsheet from "./Resources/ResorcePosts/MonthlyBudgetSpreadsheet";
import BillTracker from "./Resources/ResorcePosts/BillTracker";

import BudgetRule from "./Blogs/Blogs/BudgetRule";
import EMAandMACD from './Blogs/Blogs/EMAandMACD';
import BadInvestmentHabits from './Blogs/Blogs/BadInvestmentHabits';

import NiftyFMCG from './Stocks/NiftyFMCG';
import ShortTermStocks from './Stocks/StocksPosts/ShortTermStocks';
import StocksBetween1k2k from './Stocks/StocksPosts/StocksBetween1k2k';

import AmazonSpendsOnAnthropic from './News/NewsPosts/AmazonSpendsOnAnthropic';


function App() {


  return (
    <Router>
      <Favicon url={getUrl("GroMarket Logo.png")} />
      <Ticker />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/resources' element={<Resources />} />
        <Route path='/resources/free-monthly-budget-spreadsheet-template' element={<MonthlyBudgetSpreadsheet />} />
        <Route path='/resources/free-bill-tracker-template' element={<BillTracker />} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/50-30-20-Budget-Rule' element={<BudgetRule />} />
        <Route path='/blogs/ema-and-macd-for-intraday-trading' element={<EMAandMACD />} />
        <Route path='/blogs/bad-investment-habits-to-stay-away-from' element={<BadInvestmentHabits />} />

        <Route path='/careers' element={<Careers />} />
        <Route path='/disclaimer' element={<Disclaimer />} />

        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks/niftyfmcg" element={<NiftyFMCG />} />
        <Route path="/stocks/stocks-between-rs-1000-to-2000-with-growth-potential" element={<StocksBetween1k2k />} />
        <Route path="/stocks/best-stocks-to-buy-for-short-term" element={<ShortTermStocks />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/amazon-spends-on-startup-anthropic-claude" element={<AmazonSpendsOnAnthropic />} />


        <Route path='*' element={<Error />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
