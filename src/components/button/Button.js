import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <button
            className={`svgForm-button button bd-${props.color} btn-${props.color}`}
            type={props.type}
            value={props.type}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onclick: PropTypes.func
}

export default Button
