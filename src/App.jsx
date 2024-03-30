import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/noto-serif-jp';
import '@fontsource/poppins';
import '@fontsource/barlow';

import Resources from './pages/Resources';
import Navbar from './components/Html.jsx/Navbar';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Footer from './pages/Footer';
import Blogs from './pages/Blogs';
import News from './pages/News';
import Careers from './pages/Careers';

import BackToTop from './components/Html.jsx/BackToTop/BackToTop';

import MonthlyBudgetSpreadsheet from "./Resources/ResorcePosts/MonthlyBudgetSpreadsheet";
import BillTracker from "./Resources/ResorcePosts/BillTracker";

import BudgetRule from "./Blogs/Blogs/BudgetRule";
import EMAandMACD from './Blogs/Blogs/EMAandMACD';

import NiftyFMCG from './Stocks/NiftyFMCG';
import ShortTermStocks from './pages/ShortTermStocks';

import AmazonSpendsOnAnthropic from './News/NewsPosts/AmazonSpendsOnAnthropic';


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/resources' element={<Resources />} />
        <Route path='/resources/free-monthly-budget-spreadsheet-template' element={<MonthlyBudgetSpreadsheet />} />
        <Route path='/resources/free-bill-tracker-template' element={<BillTracker />} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/50-30-20-Budget-Rule' element={<BudgetRule />} />
        <Route path='/blogs/ema-and-macd-for-intraday-trading' element={<EMAandMACD />} />

        <Route path='/careers' element={<Careers />} />

        <Route path="/stocks/niftyfmcg" element={<NiftyFMCG />} />
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
