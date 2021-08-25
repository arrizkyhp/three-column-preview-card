import propTypes from "prop-types";

const Button = (props) => {
    const className = ['btn']

    if(props.btnOrange)
      className.push("btn-orange");
    if(props.btnCyan)
      className.push("btn-cyan");
    if(props.btnDarkCyan)
      className.push("btn-dark-cyan");

    return (
        <div>
          <button className={ className.join(" ") }>
            { props.children }
          </button>
        </div>
      );
}

Button.propTypes = {
  btnOrange: propTypes.bool,
  btnCyan: propTypes.bool,
  btnDarkCyan: propTypes.bool,
};

export default Button;