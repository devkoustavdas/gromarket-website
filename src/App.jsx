import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Favicon from "react-favicon";
import { getUrl } from './util';

import '@fontsource/noto-serif-jp';
import '@fontsource/poppins';
import '@fontsource/barlow';
import '@fontsource-variable/source-code-pro';

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

// import BudgetRule from "./Blogs/Blogs/BudgetRule";
// import EMAandMACD from './Blogs/Blogs/EMAandMACD';
// import BadInvestmentHabits from './Blogs/Blogs/BadInvestmentHabits';
// import Section80GG from './Blogs/Blogs/Section80GG';
// import BullMarketHowCanYouBenefit from './Blogs/Blogs/BullMarketHowCanYouBenefit';
// import StockMarketSecrets from './Blogs/Blogs/StockMarketSecrets';
// import ITR1Filing from './Blogs/Blogs/ITR1Filing';
// import ITR2Filing from './Blogs/Blogs/ITR2Filing';
// import StockMarketPassiveIncome from './Blogs/Blogs/StockMarketPassiveIncome';

import BankNifty from './Stocks/StocksPosts/BankNifty';
import NiftyFMCG from './Stocks/StocksPosts/NiftyFMCG';
import Nifty50 from './Stocks/StocksPosts/Nifty50';
import ShortTermStocks from './Stocks/StocksPosts/ShortTermStocks';
import StocksBetween1k2k from './Stocks/StocksPosts/StocksBetween1k2k';

import { getAllBlogs } from './Blogs/getAllBlogs';
import BlogTemplate from './Blogs/BlogTemplate';

import { getAllNews } from "./News/NewsCode/getAllNews";
import NewsTemplate from "./News/NewsCode/NewsTemplate"; 

import Content from './pages/Content';

import ShortBlog from "./pages/ShortBlog";
import SavingTaxesLegally from './ShortBlog/SavingTaxesLegally';

import SWPCalculator from './Tools/SWP';
import TargetWealthSIP from './Tools/ToolsCode/TargetWealthSIP';

function App() {
  const newsPosts = getAllNews();
  const blogPosts = getAllBlogs();
  
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

{/*     <Route path='blogs'>
          <Route index element={<Blogs />} />
          <Route path='50-30-20-budget-rule-in-personal-finance-with-template' element={<BudgetRule />} />
          <Route path='claim-deduction-under-section-80gg-for-rent-paid' element={<Section80GG />} />
          <Route path='itr-1-filing-steps-and-eligibility' element={<ITR1Filing />} />
          <Route path='itr-2-filing-steps-and-eligibility' element={<ITR2Filing />} />
          <Route path='ema-and-macd-strategy-for-successful-intraday-trading' element={<EMAandMACD />} />
          <Route path='bad-investment-habits-to-stay-away-from' element={<BadInvestmentHabits />} />
          <Route path='bull-market-how-can-you-benefit-from-bull-market' element={<BullMarketHowCanYouBenefit />} />
          <Route path='stock-market-investing-tips-noone-tells-you' element={<StockMarketSecrets />} />
          <Route path='stock-market-strategies-for-employed-passive-income' element={<StockMarketPassiveIncome />} />
        </Route> */}

        <Route path="stocks">
          <Route index element={<Stocks />} />
          <Route path="niftyfmcg-analysis" element={<NiftyFMCG />} />
          <Route path="nifty50-analysis" element={<Nifty50 />} />
          <Route path="banknifty-analysis" element={<BankNifty />} />
          <Route path="stocks-between-rs-1000-to-2000-with-growth-potential" element={<StocksBetween1k2k />} />
          <Route path="best-stocks-to-buy-for-short-term" element={<ShortTermStocks />} />
        </Route>

        <Route path="blogs">
          <Route index element={<Blogs />} />

          {blogPosts.map(post => (
            <Route
              key={post.slug}
              path={post.slug}
              element={
                <BlogTemplate
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                  image={post.image}
                  link={post.slug}
                  content={<post.Component />}
                />
              }
            />
          ))}
        </Route>

        <Route path="news">
          <Route index element={<News />} />

          {newsPosts.map(post => (
            <Route
              key={post.slug}
              path={post.slug}
              element={
                <NewsTemplate
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                  image={post.image}
                  link={post.slug}
                  content={<post.Component />}
                />
              }
            />
          ))}
        </Route>

        <Route path="tools">
          <Route path="target-wealth-sip-calculator" element={<TargetWealthSIP />} />
          <Route path="swp-calculator" element={<SWPCalculator />} />
        </Route>

        <Route path="short-blog">
          <Route index element={<ShortBlog />} />
          <Route path="saving-taxes-legally" element={<SavingTaxesLegally />} />
        </Route>
        
        <Route path='pyq/xyzcontent' element={<Content />} />

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
