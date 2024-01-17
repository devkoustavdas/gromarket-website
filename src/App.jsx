import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/source-serif-pro';
import '@fontsource/barlow';
import '@fontsource-variable/red-rose';

import Resources from './pages/Resources';
import Navbar from './components/Html.jsx/Navbar';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Footer from './pages/Footer';
import Blogs from './pages/Blogs';

import MonthlyBudgetSpreadsheet from "./Resources/MonthlyBudgetSpreadsheet";
import BillTracker from "./Resources/BillTracker";

import BudgetRule from './Blogs/BudgetRule';

import NiftyFMCG from './Stocks/NiftyFMCG';

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

          <Route path="/stocks/niftyfmcg" element={<NiftyFMCG />} />

          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
