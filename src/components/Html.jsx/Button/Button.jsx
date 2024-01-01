import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const Btn = ({ title, text, icon, type }) => {
    type = type.toUpperCase();
    var cl = "";
    if (type == "NEUTRAL") {cl = "btn-style-neutral";}
    else if (type == "DANGER") { cl = "btn-style-danger"; }
    else if (type == "SUCCESS") { cl = "btn-style-success"; }
    else if (type == "WARNING") { cl = "btn-style-warning"; }
    else if (type == "BLANK") { cl = "btn-style-blank"; }
    
    return (
        <button type='button' title={title} aria-label={title} className={`${styles.button} ${styles[cl]}`}>
            {icon} {text}
        </button>
    )
}

Btn.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Btn;
