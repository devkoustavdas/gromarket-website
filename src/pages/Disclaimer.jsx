import styles from "../content.module.css";
import Subscribe from "../components/Html.jsx/Subscribe";
import { useEffect } from "react";

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <main className="p-6">
            <section className={styles.content}>
            <h2>Terms & Conditions</h2>
            <p>It's essential to recognize that while the strategies and suggestions discussed on GroMarket can be powerful, they are not foolproof. Market conditions are inherently unpredictable, and factors beyond our control can influence price movements at any moment. Therefore, it's crucial to approach financial matters with caution and always be prepared to adapt to changing circumstances.</p>
            <p><em>GroMarket does not guarantee or warrant the accuracy or reliability of the information provided on the website, and we cannot be held accountable for any loss of wealth or adverse outcomes resulting from the implementation of these strategies.</em></p>
            <p><em>Please read the SEBI prescribed Combined Risk Disclosure Document prior to investing.</em></p>
            <p>At GroMarket, we prioritize transparency and integrity in our recommendations. While we strive to provide valuable insights and strategies, we cannot guarantee their effectiveness in every market scenario. Each person's experience may vary, and it's essential to conduct thorough research and consider your own risk tolerance before trading or ivesting money.</p>
            <p>Ultimately, successful finance management and wealth building requires a combination of skill, discipline, and a deep understanding of market dynamics. By staying informed, remaining flexible, and continuously refining your approach, you can navigate the complexities of intraday trading with confidence. Remember, the journey to wealth building is a continuous learning process, and GroMarket is here to support you every step of the way.</p>    
            </section>
            <Subscribe />
        </main >
    )
}

export default Disclaimer;
