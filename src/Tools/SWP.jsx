import React, { useState } from 'react';

const SWPCalculator = () => {
    const format = {
        input: "bg-slate-700 py-1 p-2 rounded-md mb-6 w-32",
        box: 'bg-slate-800 rounded-md mx-6 my-8 px-6 py-4',
    }
    const [investment, setInvestment] = useState(); 
    const [swpStart, setSwpStart] = useState(); 
    const [growthRate, setGrowthRate] = useState(); 
    const [withdrawalAmount, setWithdrawalAmount] = useState(); 
    const [withdrawalIncrease, setWithdrawalIncrease] = useState(); 
    const [tenureReturn, setTenureReturn] = useState(); 

    const formatNumber = (number) => {
        return number.toLocaleString('en-IN');
    };

    const handleInvestmentChange = (e) => {
        if (e.target.value !== isNaN) {
            setInvestment(parseInt(e.target.value));
        }
        else {
            setInvestment(0);
        }
    };

    const handleSwpStartChange = (e) => {
        setSwpStart(parseInt(e.target.value));
    };

    const handleGrowthRateChange = (e) => {
        setGrowthRate(parseInt(e.target.value));
    };

    const handleWithdrawalAmountChange = (e) => {
        setWithdrawalAmount(parseInt(e.target.value));
    };

    const handleWithdrawalIncreaseChange = (e) => {
        setWithdrawalIncrease(parseInt(e.target.value));
    };

    const handleTenureReturnChange = (e) => {
        setTenureReturn(parseInt(e.target.value));
    };

    const calculateSWP = () => {
        const investmentGrowth = investment * (1 + growthRate / 100) ** swpStart; 
        let totalWithdrawal = 0;
        let balance = investmentGrowth;
        let currentWithdrawal = withdrawalAmount;

        for (let year = 0; year < 15 - swpStart; year++) {
            for (let month = 0; month < 12; month++) {
                balance += (balance * tenureReturn) / 100 / 12; // Monthly return on balance
                balance -= currentWithdrawal; // Withdraw amount
                totalWithdrawal += currentWithdrawal;
            }
            currentWithdrawal += (currentWithdrawal * withdrawalIncrease) / 100; // Increase withdrawal annually
        }

        return {
            totalWithdrawal: formatNumber(totalWithdrawal),
            balance: formatNumber(balance),
            swpYears: 15 - swpStart,
        };
    };

    const results = calculateSWP();

    return (
        <div>
            <h1>SWP Calculator</h1>

            <div className={format.box}>
                <div>
                    <label className='mr-6'>I wish to invest</label>
                    <span className='bg-slate-700 rounded-circle py-1.5 px-3 mr-2'>₹</span><input list="investmentamount" value={formatNumber(investment)} onChange={handleInvestmentChange} className={format.input} />
                    <datalist id="investmentamount">
                        <option value={500000}>5 lakhs</option>
                        <option value={1000000}>10 lakhs</option>
                        <option value={2000000}>20 lakhs</option>
                        <option value={5000000}>50 lakhs</option>
                        <option value={10000000}>1 crore</option>
                        <option value={50000000}>5 crores</option>
                    </datalist>
                </div>

                <div>
                    <label className='mr-6'>I will start my SWP</label>
                    <input list="swpstartyears" value={swpStart} onChange={handleSwpStartChange} className={format.input} />
                    <datalist id="swpstartyears">
                        <option value={0}>0 years later</option>
                        <option value={1}>1 year later</option>
                        <option value={2}>2 years later</option>
                        <option value={5}>5 years later</option>
                        <option value={10}>10 years later</option>
                    </datalist> years later
                </div>

                <div>
                    <label className='mr-6'>I expect my investment to grow by</label>
                    <input list="growthrate" value={growthRate} onChange={handleGrowthRateChange} className={format.input} />
                    <datalist id="growthrate">
                        <option value={7}>7%</option>
                        <option value={8}>8%</option>
                        <option value={10}>10%</option>
                        <option value={12}>12%</option>
                        <option value={14}>14%</option>
                    </datalist> <span className='bg-slate-700 rounded-circle py-1.5 px-2.5 ml-2'>%</span> every year
                </div>

                <div>
                    <label className='mr-6'>I wish to withdraw</label>
                    <span className='bg-slate-700 rounded-circle py-1.5 px-3 mr-2'>₹</span><input list="withdrawalamount" value={withdrawalAmount} onChange={handleWithdrawalAmountChange} className={format.input} />
                    <datalist id="withdrawalamount">
                        <option value={25000}>25 thousands</option>
                        <option value={50000}>50 thousands</option>
                        <option value={100000}>1 lakh</option>
                        <option value={500000}>5 lakhs</option>
                        <option value={1000000}>10 lakhs</option>
                        <option value={2000000}>20 lakhs</option>
                        <option value={5000000}>50 lakhs</option>
                    </datalist> every month
                </div>

                <div>
                    <label className='mr-6'>I will increase the withdrawal amount by</label>
                    <input list="withdrawalincrease" value={withdrawalIncrease} onChange={handleWithdrawalIncreaseChange} className={format.input} />
                    <datalist id="withdrawalincrease">
                        <option value={5}>5%</option>
                        <option value={7}>7%</option>
                        <option value={8}>8%</option>
                        <option value={10}>10%</option>
                        <option value={12}>12%</option>
                        <option value={14}>14%</option>
                    </datalist> <span className='bg-slate-700 rounded-circle py-1.5 px-2.5 ml-2'>%</span> every year
                </div>

                <div>
                    <label className='mr-6'>During the tenure of SWP, I expect a return of</label>
                    <input list="tenurereturn" value={tenureReturn} onChange={handleTenureReturnChange} className={format.input} />
                    <datalist id="tenurereturn">
                        <option value={7}>7%</option>
                        <option value={8}>8%</option>
                        <option value={10}>10%</option>
                        <option value={12}>12%</option>
                        <option value={14}>14%</option>
                    </datalist> <span className='bg-slate-700 rounded-circle py-1.5 px-2.5 ml-2'>%</span> every year
                </div>
            </div>

            <div className={format.box}>
                <p>Investment Value before the SWP starts: ₹{results.balance}</p>
                <p>You can withdraw for: {results.swpYears} years</p>
                <p>Total withdrawal amount: ₹{results.totalWithdrawal}</p>
            </div>
        </div>
    );
};

export default SWPCalculator;
