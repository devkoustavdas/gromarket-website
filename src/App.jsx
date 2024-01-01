import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/source-serif-pro';
import '@fontsource/barlow';
import '@fontsource-variable/red-rose';

import Resources from './pages/Resources';
import Navbar from './components/Html.jsx/Navbar';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Footer from './pages/Footer';

import MonthlyBudgetSpreadsheet from "./Resources/MonthlyBudgetSpreadsheet";
import BillTracker from "./Resources/BillTracker";

function App() {

  return (
    <Router>
      <Navbar />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/resources/free-monthly-budget-spreadsheet-template' element={<MonthlyBudgetSpreadsheet />} />
          <Route path='/resources/free-bill-tracker-template' element={<BillTracker />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
