import StockTemplate from './StockTemplate/StockTemplate';
import { niftyfmcg } from '../importStocks';
import { useEffect, useState } from 'react';

const NiftyFMCG = () => {
    const [niftyFMCG, setNiftyFMCG] = useState(null);

    useEffect(() => {
        niftyfmcg()
            .then(data => {
                setNiftyFMCG(data);
            })
            .catch(error => {
                console.error('Error fetching Nifty FMCG data:', error);
            });
    }, []);

    // Check if niftyFMCG is not null before accessing its properties
    const date = niftyFMCG ? niftyFMCG[0] : null;
    const stock = niftyFMCG
        ? {name: "Nifty FMCG",
        nse: "NIFTYFMCG",
        price: niftyFMCG[25],
        change: niftyFMCG[4],
        return: niftyFMCG[26],
        open: niftyFMCG[1],
        high: niftyFMCG[2],
        low: niftyFMCG[3],
        monthchange: niftyFMCG[5],
        threemonthchange: niftyFMCG[6],
        sma5: niftyFMCG[7],
        sma20: niftyFMCG[8],
        sma200: niftyFMCG[9],
        ema5: niftyFMCG[10],
        ema50: niftyFMCG[11],
        ema200: niftyFMCG[12],
        divident: niftyFMCG[13],
        pe: niftyFMCG[14],
        pb: niftyFMCG[15],
        mcap: niftyFMCG[16],
        cagr1yr: niftyFMCG[17],
        cagr5yr: niftyFMCG[18],
        macd: niftyFMCG[27],
        r1: niftyFMCG[19],
        r2: niftyFMCG[20],
        r3: niftyFMCG[21],
        s1: niftyFMCG[22],
        s2: niftyFMCG[23],
        s3: niftyFMCG[24],
        }
        : null;
    const link = "niftyfmcg";
    const content = niftyFMCG ? niftyFMCG[28] : null;

    return (
        <main>
            {niftyFMCG && (
                <StockTemplate date={date} stock={stock} link={link} content={content} />
            )}
        </main>
    );
}

export default NiftyFMCG;