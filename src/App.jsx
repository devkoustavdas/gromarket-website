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
import Section80GG from './Blogs/Blogs/Section80GG';

import BankNifty from './Stocks/StocksPosts/BankNifty';
import NiftyFMCG from './Stocks/StocksPosts/NiftyFMCG';
import Nifty50 from './Stocks/StocksPosts/Nifty50';
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

        <Route path='resources'>
          <Route index element={<Resources />} />
          <Route path='free-monthly-budget-spreadsheet-template' element={<MonthlyBudgetSpreadsheet />} />
          <Route path='free-bill-tracker-template' element={<BillTracker />} />
        </Route>

        <Route path='blogs'>
          <Route index element={<Blogs />} />
          <Route path='50-30-20-Budget-Rule' element={<BudgetRule />} />
          <Route path='claim-deduction-under-section-80gg-for-rent-paid' element={<Section80GG />} />
          <Route path='ema-and-macd-for-intraday-trading' element={<EMAandMACD />} />
          <Route path='bad-investment-habits-to-stay-away-from' element={<BadInvestmentHabits />} />
        </Route>

        <Route path="stocks">
          <Route index element={<Stocks />} />
          <Route path="niftyfmcg-analysis" element={<NiftyFMCG />} />
          <Route path="nifty50-analysis" element={<Nifty50 />} />
          <Route path="banknifty-analysis" element={<BankNifty />} />
          <Route path="stocks-between-rs-1000-to-2000-with-growth-potential" element={<StocksBetween1k2k />} />
          <Route path="best-stocks-to-buy-for-short-term" element={<ShortTermStocks />} />
        </Route>

        <Route path="news">
          <Route index element={<News />} />
          <Route path="amazon-spends-on-startup-anthropic-claude" element={<AmazonSpendsOnAnthropic />} />
        </Route>

        <Route path='careers' element={<Careers />} />
        <Route path='disclaimer' element={<Disclaimer />} />
        <Route path='*' element={<Error />} />
        
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
