import styles from "./StockTemplate.module.css";
import Box from "../../components/Html.jsx/Box";
import PropTypes from "prop-types";

const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 4,
    });

    return formatter.format(amount);
};

const StockTemplate = ({ stock, date }) => {

    return (
        <main className="px-4 mt-4">
            <section>
                <h1 aria-label={`${stock["name"]} Daily Analysis by GroMarket`} title={`${stock["name"]} Daily Analysis by GroMarket`} className={styles.stockTitle}>
                    {stock["name"]}
                </h1>
                <div className={styles.stockPriceBlock}
                    title={`${stock["name"]} Share price as of ${date}`}
                    aria-label={`${stock["name"]} price as of ${date}`}>
                    <span className={styles.stockPrice}>
                        {formatCurrency(stock["price"])}
                    </span>
                    <span
                        style={{
                            color: stock["change"] > 0 ? "green" : "red",
                        }}
                    >
                        {stock["change"] > 0 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-graph-up-arrow"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-graph-down-arrow"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"
                                />
                            </svg>
                        )}
                        &nbsp; {formatCurrency(stock["change"])} &nbsp; ({stock["return"]}%)
                    </span>
                </div>
                <h1 aria-label={`${stock["name"]} Daily Analysis by GroMarket`} title={`${stock["name"]} Daily Analysis by GroMarket`} className={styles.stockTitle2}>
                    {stock["name"]} Share Price
                </h1>
                <Box
                    id={"inside-monthly-budget"}
                    head={"What’s Inside The Monthly Budget Template"}
                    body={stock["trend"]}
                    bg={"#ffbe45"}
                    width={"90vw"}
                />

            </section>
            <section>
                <table className={styles.stockTable}>
                    <caption><h2>Nifty FMCG Performance Overview</h2></caption>
                    <thead>
                        <tr>
                            <th scope="col">Factor</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody id="search-result">
                        <tr>
                            <td data-label="Factor">Day Open</td>
                            <td data-label="Value">{formatCurrency(stock["open"])}</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">Day Close</td>
                            <td data-label="Value">{formatCurrency(stock["price"])}</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">Day High</td>
                            <td data-label="Value">{formatCurrency(stock["high"])}</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">Day Low</td>
                            <td data-label="Value">{formatCurrency(stock["low"])}</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">Day Change</td>
                            <td data-label="Value">{formatCurrency(stock["change"])}</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">Day Returns</td>
                            <td data-label="Value">{stock["return"]}%</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">Divident Yield</td>
                            <td data-label="Value">{stock["divident"]}%</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">P/E Ratio</td>
                            <td data-label="Value">{stock["pe"]}</td>
                        </tr>
                        <tr>
                            <td data-label="Factor">PB Ratio</td>
                            <td data-label="Value">{stock["pb"]}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}
StockTemplate.propTypes = {
    stock: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        change: PropTypes.number,
        return: PropTypes.number,
    }).isRequired,
    date: PropTypes.string.isRequired,
};
export default StockTemplate;
