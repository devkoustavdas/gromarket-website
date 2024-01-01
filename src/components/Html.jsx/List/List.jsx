import PropTypes from 'prop-types';
import styles from "./List.module.css";

const List = ({ text }) => {
    return (
        <ul className={styles.uili}>
            {Array.isArray(text) &&
                text.map((textItem, index) => (
                    <li key={index}>
                        {textItem}
                    </li>
                ))}
        </ul>
    );
};

List.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
