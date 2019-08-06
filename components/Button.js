import React from 'react';
import PropTypes from 'prop-types';

 const Button = props => {

  

   console.log(props);
    return (
      <button
        className={`btn ${props.className}`}>
        <i className={props.fontClassName}></i>
        {props.text}
          
      </button>
    )
}

Button.defaultProps = {
  text: 'Sepetim'
}

Button.propTypes = {
  className: PropTypes.string,
  text:PropTypes.string.isRequired,
  fontClassName: PropTypes.string,
  icon: PropTypes.object
}

export default Button;