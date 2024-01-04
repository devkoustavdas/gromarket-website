import Share from '../components/Html.jsx/Share';
import StockTemplate from './StockTemplate/StockTemplate';

const NiftyFMCG = () => {
    const date = "15 December, 2023 - 4:14 p.m IST";
    const stock = {
        name: "Nifty FMCG",
        price: 54186.2,
        change: -175.25,
        high: 54585.75,
        low: 53963.25,
        open: 54542.05,
        return: -0.32,
        divident: 1.84,
        pe: 44.13,
        pb: 11.71
    };
    return (
        <main>
            <Share
                title={`Today's (${date}) Nifty FMCG Full Analysis`}
                link={"niftyfmcg"}
            />
            <StockTemplate date={date} stock={stock} />
        </main>
    );
}

export default NiftyFMCG;
