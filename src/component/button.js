import PropTypes from "prop-types";
const Button = ({ onClick, backgroundColor, text }) => {
    return (<button onClick={ onClick } className={'btn'} style={{
        backgroundColor: backgroundColor,
    }}
    >
        {text}
    </button>);
}


Button.propTypes = {
    text : PropTypes.string,
    backgroundColor : PropTypes.string,
    onClickFunction: PropTypes.func,
}

export default Button
